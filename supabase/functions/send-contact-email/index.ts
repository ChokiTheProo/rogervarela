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

    // Send email to Roger (portfolio owner) - using roger1robson2@gmail.com as it's the verified Resend email
    const emailToOwnerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["roger1robson2@gmail.com"],
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

    // Note: Confirmation email to sender is disabled because Resend requires a verified domain
    // to send emails to addresses other than the account owner's email
    console.log("Email sent successfully to owner. Confirmation email skipped (requires verified domain).");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully" 
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
