import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;
  const trimmedName = getString(name);
  const trimmedEmail = getString(email);
  const trimmedMessage = getString(message);

  if (!trimmedEmail) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    return NextResponse.json({ message: "Email service is not configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      replyTo: trimmedEmail,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${trimmedName || trimmedEmail}`,
      text: [
        `Name: ${trimmedName || "Not provided"}`,
        `Email: ${trimmedEmail}`,
        "",
        trimmedMessage || "No message provided.",
      ].join("\n"),
      html: `<p><b>Name:</b> ${escapeHtml(trimmedName || "Not provided")}<br/><b>Email:</b> ${escapeHtml(trimmedEmail)}<br/><b>Message:</b><br/>${escapeHtml(trimmedMessage || "No message provided.")}</p>`,
    });

    return NextResponse.json({ message: "Message sent successfully" });
  } catch {
    return NextResponse.json({ message: "Failed to send message" }, { status: 500 });
  }
}
