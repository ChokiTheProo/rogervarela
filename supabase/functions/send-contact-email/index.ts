import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received contact email request");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();
    
    console.log(`Processing contact form from: ${name} (${email})`);

    // Validate inputs
    if (!name || !email || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email to Roger (portfolio owner)
    const emailToOwnerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["rogervarelav@gmail.com"],
        subject: `Nova mensagem de contato de ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f0f23; color: #ffffff; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 16px; padding: 32px; border: 1px solid #a855f7; }
              .header { text-align: center; margin-bottom: 24px; }
              .header h1 { color: #a855f7; margin: 0; font-size: 24px; }
              .content { background: rgba(168, 85, 247, 0.1); border-radius: 12px; padding: 24px; margin: 16px 0; }
              .field { margin-bottom: 16px; }
              .label { color: #a855f7; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
              .value { color: #ffffff; margin-top: 4px; font-size: 16px; }
              .message-box { background: rgba(255, 255, 255, 0.05); border-radius: 8px; padding: 16px; margin-top: 8px; border-left: 4px solid #a855f7; }
              .footer { text-align: center; margin-top: 24px; color: #888; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📬 Nova Mensagem de Contato</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Nome</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}" style="color: #a855f7;">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Mensagem</div>
                  <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>Mensagem enviada através do seu portfólio</p>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    const emailToOwnerData = await emailToOwnerResponse.json();
    console.log("Email sent to owner:", emailToOwnerData);

    if (!emailToOwnerResponse.ok) {
      throw new Error(emailToOwnerData.message || "Failed to send email to owner");
    }

    // Send confirmation email to the sender
    const confirmationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Roger Varela <onboarding@resend.dev>",
        to: [email],
        subject: "Obrigado pelo contato!",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f0f23; color: #ffffff; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 16px; padding: 32px; border: 1px solid #a855f7; }
              .header { text-align: center; margin-bottom: 24px; }
              .header h1 { color: #a855f7; margin: 0; font-size: 24px; }
              .content { text-align: center; padding: 24px; }
              .content p { color: #e0e0e0; line-height: 1.6; }
              .highlight { color: #a855f7; font-weight: 600; }
              .footer { text-align: center; margin-top: 24px; color: #888; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✨ Mensagem Recebida!</h1>
              </div>
              <div class="content">
                <p>Olá <span class="highlight">${name}</span>,</p>
                <p>Muito obrigado por entrar em contato! Recebi sua mensagem e responderei o mais breve possível.</p>
                <p>Agradeço pelo interesse!</p>
                <p style="margin-top: 24px;">Atenciosamente,<br><span class="highlight">Roger Varela</span></p>
              </div>
              <div class="footer">
                <p>Este é um email automático, por favor não responda.</p>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    const confirmationData = await confirmationResponse.json();
    console.log("Confirmation email sent:", confirmationData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }), 
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
