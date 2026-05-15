import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_BODY_BYTES = 8 * 1024;
const MAX_NAME_LENGTH = 80;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_HONEYPOT_LENGTH = 100;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

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

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();

  for (const [entryKey, entry] of rateLimitStore) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(entryKey);
    }
  }

  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function isOverLength(value: string, maxLength: number) {
  return value.length > maxLength;
}

export async function POST(request: Request) {
  let body: unknown;

  const contentLength = Number(request.headers.get("content-length") ?? "0");

  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ message: "Request body is too large" }, { status: 413 });
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json({ message: "Too many requests" }, { status: 429 });
  }

  try {
    const rawBody = await request.text();

    if (new Blob([rawBody]).size > MAX_BODY_BYTES) {
      return NextResponse.json({ message: "Request body is too large" }, { status: 413 });
    }

    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message, website } = body as Record<string, unknown>;
  const trimmedName = getString(name);
  const trimmedEmail = getString(email);
  const trimmedMessage = getString(message);
  const trimmedWebsite = getString(website);

  if (
    isOverLength(trimmedName, MAX_NAME_LENGTH) ||
    isOverLength(trimmedEmail, MAX_EMAIL_LENGTH) ||
    isOverLength(trimmedMessage, MAX_MESSAGE_LENGTH) ||
    isOverLength(trimmedWebsite, MAX_HONEYPOT_LENGTH)
  ) {
    return NextResponse.json({ message: "One or more fields are too long" }, { status: 400 });
  }

  if (trimmedWebsite) {
    return NextResponse.json({ message: "Message sent successfully" });
  }

  if (!trimmedEmail) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(trimmedEmail)) {
    return NextResponse.json({ message: "Email is invalid" }, { status: 400 });
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
