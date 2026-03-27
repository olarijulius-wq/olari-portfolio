import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["olarijulius@example.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 24px; background: #080808; color: #ffffff; border-radius: 12px;">
          <h2 style="margin: 0 0 24px; font-size: 20px; font-weight: 600; color: #ffffff;">New message from your portfolio</h2>
          <div style="background: #111111; border: 1px solid #222222; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <p style="margin: 0 0 8px; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">From</p>
            <p style="margin: 0; color: #ffffff; font-size: 15px;">${name}</p>
          </div>
          <div style="background: #111111; border: 1px solid #222222; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <p style="margin: 0 0 8px; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</p>
            <p style="margin: 0; color: #ffffff; font-size: 15px;">${email}</p>
          </div>
          <div style="background: #111111; border: 1px solid #222222; border-radius: 8px; padding: 20px;">
            <p style="margin: 0 0 8px; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
            <p style="margin: 0; color: #ffffff; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
