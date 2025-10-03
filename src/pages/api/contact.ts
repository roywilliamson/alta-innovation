import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Initialize Resend client with environment variable
    // Try multiple possible environment variable names and access methods
    const apiKey = import.meta.env.RESEND_API_KEY ||
                   process.env.RESEND_API_KEY ||
                   import.meta.env.VITE_RESEND_API_KEY ||
                   process.env.VITE_RESEND_API_KEY ||
                   import.meta.env.PUBLIC_RESEND_API_KEY ||
                   process.env.PUBLIC_RESEND_API_KEY;

    console.log('Environment check:', {
      hasImportMetaEnv: !!import.meta.env.RESEND_API_KEY,
      hasProcessEnv: !!process.env.RESEND_API_KEY,
      hasViteImportMeta: !!import.meta.env.VITE_RESEND_API_KEY,
      hasViteProcess: !!process.env.VITE_RESEND_API_KEY,
      hasPublicImportMeta: !!import.meta.env.PUBLIC_RESEND_API_KEY,
      hasPublicProcess: !!process.env.PUBLIC_RESEND_API_KEY,
      hasApiKey: !!apiKey,
      apiKeyLength: apiKey ? apiKey.length : 0
    });

    if (!apiKey) {
      console.error('RESEND_API_KEY environment variable is not set');
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Email service is not configured. Please contact us directly.'
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const resend = new Resend(apiKey);
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const consultationType = formData.get('consultationType') as string;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Name, email, and message are required fields.' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Please provide a valid email address.' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'ALTA Innovation Contact <onboarding@resend.dev>', // Using Resend's default domain
      to: ['roy@alta-innovation.com'], // Your email address
      replyTo: email, // User's email for easy replies
      subject: `New Contact Form Submission: ${subject || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #ea580c; margin-bottom: 20px; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 10px;">Contact Information</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              ${company ? `<p style="margin: 5px 0;"><strong>Company:</strong> ${company}</p>` : ''}
              ${consultationType ? `<p style="margin: 5px 0;"><strong>Consultation Type:</strong> ${consultationType}</p>` : ''}
            </div>

            ${subject ? `
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 10px;">Subject</h3>
              <p style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin: 0;">${subject}</p>
            </div>
            ` : ''}

            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 10px;">Message</h3>
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${message}</div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
              <p>This message was sent from the ALTA Innovation contact form.</p>
              <p>Submitted on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Failed to send email. Please try again or contact us directly.' 
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for your message! We\'ll get back to you soon.',
        emailId: data?.id 
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'An unexpected error occurred. Please try again.' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
