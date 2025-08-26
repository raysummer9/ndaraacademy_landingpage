import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const formData = new FormData();
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('subject', `New Contact Form Submission from ${name}`);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: 'Form submitted successfully' });
    } else {
      return NextResponse.json(
        { success: false, message: data.message || 'Form submission failed' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
