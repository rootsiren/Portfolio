export async function onRequest(context) {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight OPTIONS request
  if (context.request.method === 'OPTIONS') {
    return new Response(null, { headers });
  }

  // Only allow POST
  if (context.request.method !== 'POST') {
    return new Response('Method not allowed', { 
      status: 405, 
      headers 
    });
  }

  try {
    const formData = await context.request.formData();
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const subject = formData.get('user_subject') || 'No subject';
    const message = formData.get('user_message');

    // Get keys from environment
    const SERVICE_ID = context.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = context.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = context.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      return new Response(
        JSON.stringify({ error: 'EmailJS keys not configured' }),
        { 
          status: 500, 
          headers: { ...headers, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Send email via EmailJS API
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: {
          user_name: name,
          user_email: email,
          user_subject: subject,
          user_message: message,
        },
      }),
    });

    const result = await response.json();

    if (response.ok) {
      return new Response(
        JSON.stringify({ success: true, message: 'Email sent successfully!' }),
        { 
          status: 200, 
          headers: { ...headers, 'Content-Type': 'application/json' } 
        }
      );
    } else {
      return new Response(
        JSON.stringify({ error: 'Failed to send email', details: result }),
        { 
          status: 500, 
          headers: { ...headers, 'Content-Type': 'application/json' } 
        }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Server error', details: error.message }),
      { 
        status: 500, 
        headers: { ...headers, 'Content-Type': 'application/json' } 
      }
    );
  }
}