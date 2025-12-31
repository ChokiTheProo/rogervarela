import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

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
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// In-memory rate limiting (per instance, resets on cold start)
const rateLimits = new Map<string, { count: number; resetTime: number }>();

function getClientIP(req: Request): string {
  // Try various headers for IP detection
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIP = req.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  // Fallback to a generic identifier
  return "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimits.get(ip);
  
  // Reset after 1 hour (3600000 ms)
  if (!limit || now > limit.resetTime) {
    rateLimits.set(ip, { count: 1, resetTime: now + 3600000 });
    return true;
  }
  
  // Allow max 5 requests per hour per IP
  if (limit.count >= 5) {
    return false;
  }
  
  limit.count++;
  return true;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received contact email request");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Rate limiting check
  const clientIP = getClientIP(req);
  if (!checkRateLimit(clientIP)) {
    console.warn(`Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ error: "Too many requests. Please try again later." }),
      {
        status: 429,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();
    
    console.log(`Processing contact form from: ${name}`);

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

    // Server-side length validation
    if (name.length > 100 || email.length > 255 || message.length > 1000) {
      console.error("Input too long");
      return new Response(
        JSON.stringify({ error: "Input too long" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize user inputs to prevent XSS
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br>');

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
        subject: `Nova mensagem de contato de ${safeName}`,
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
                  <div class="value">${safeName}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${safeEmail}" style="color: #a855f7;">${safeEmail}</a></div>
                </div>
                <div class="field">
                  <div class="label">Mensagem</div>
                  <div class="message-box">${safeMessage}</div>
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

    // Save contact message to database
    try {
      const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);
      
      const { error: dbError } = await supabase
        .from("contact_messages")
        .insert({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          ip_address: clientIP !== "unknown" ? clientIP : null,
        });

      if (dbError) {
        console.error("Failed to save message to database:", dbError);
        // Don't fail the request - email was still sent successfully
      } else {
        console.log("Contact message saved to database");
      }
    } catch (dbSaveError) {
      console.error("Database save error:", dbSaveError);
      // Don't fail the request - email was still sent successfully
    }

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
    // Log detailed error internally for debugging
    console.error("Error in send-contact-email function:", {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    
    // Return generic error message to client (no internal details)
    return new Response(
      JSON.stringify({ 
        error: "An error occurred while sending your message. Please try again later.",
        code: "EMAIL_SEND_FAILED"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
