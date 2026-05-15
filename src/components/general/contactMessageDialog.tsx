"use client";

import { Mail, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type ToastState = {
  tone: "success" | "error";
  message: string;
} | null;

const emptyValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

export function ContactMessageDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [isSending, setIsSending] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeout = window.setTimeout(() => setToast(null), 5000);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    if (isOpen) {
      emailInputRef.current?.focus();
    }
  }, [isOpen]);

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));

    if (field === "email" && value.trim()) {
      setShowEmailError(false);
    }
  };

  const closeDialog = () => {
    setIsOpen(false);
    setShowEmailError(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.email.trim()) {
      setShowEmailError(true);
      emailInputRef.current?.focus();
      return;
    }

    setIsSending(true);

    try {
      const formData = new FormData(event.currentTarget);
      const website = String(formData.get("website") ?? "").trim();

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          website,
        }),
      });

      if (!response.ok) {
        throw new Error("Message failed");
      }

      setValues(emptyValues);
      setToast({ tone: "success", message: "Message sent. Thanks for reaching out." });
    } catch {
      setToast({
        tone: "error",
        message: "Message failed to send. Your draft is still here if you try again.",
      });
    } finally {
      setIsSending(false);
      closeDialog();
    }
  };

  return (
    <>
      <button
        type="button"
        className="styled-button transition-all duration-300 hover:-translate-y-0.5"
        onClick={() => setIsOpen(true)}
      >
        <Mail size={18} aria-hidden="true" />
        Send a message
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/95 px-4 py-6">
          <div
            className="absolute inset-0"
            aria-hidden="true"
            onClick={isSending ? undefined : closeDialog}
          />
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-message-title"
            className="basic-panel relative z-10 w-full max-w-xl !bg-black px-5 py-6 sm:px-7"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-mono text-[0.68rem] tracking-[0.32em] text-[var(--color-mint)] uppercase">
                  Contact
                </p>
                <h2
                  id="contact-message-title"
                  className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-white"
                >
                  Send me a message
                </h2>
              </div>

              <button
                type="button"
                className="reg-button !min-h-1 rounded-full !px-3"
                onClick={closeDialog}
                disabled={isSending}
                aria-label="Close message dialog"
              >
                <X size={15} aria-hidden="true" />
              </button>
            </div>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="pointer-events-none absolute -left-[100vw] h-px w-px overflow-hidden">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-[0.68rem] tracking-[0.24em] text-white/55 uppercase"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={(event) => updateValue("name", event.target.value)}
                  className="mt-2 w-full border border-white/12 bg-black/20 px-4 py-3 text-sm text-white transition-colors duration-300 outline-none placeholder:text-white/28 focus:border-[var(--color-mint)]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-[0.68rem] tracking-[0.24em] text-white/55 uppercase"
                >
                  Email
                </label>
                <input
                  ref={emailInputRef}
                  id="contact-email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(event) => updateValue("email", event.target.value)}
                  aria-invalid={showEmailError}
                  aria-describedby={showEmailError ? "contact-email-error" : undefined}
                  className={cn(
                    "mt-2 w-full border bg-black/20 px-4 py-3 text-sm text-white transition-colors duration-300 outline-none placeholder:text-white/28 focus:border-[var(--color-mint)]",
                    showEmailError ? "border-red-400 bg-red-500/10" : "border-white/12"
                  )}
                  placeholder="you@example.com"
                />
                {showEmailError ? (
                  <p id="contact-email-error" className="mt-2 text-sm text-red-300">
                    Email is required so I can reply.
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-[0.68rem] tracking-[0.24em] text-white/55 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  value={values.message}
                  onChange={(event) => updateValue("message", event.target.value)}
                  className="mt-2 max-h-64 w-full resize-y border border-white/12 bg-black/20 px-4 py-3 text-sm leading-7 text-white transition-colors duration-300 outline-none placeholder:text-white/28 focus:border-[var(--color-mint)]"
                  placeholder="What would you like to talk about?"
                />
              </div>

              <button
                type="submit"
                className="styled-button w-full justify-center"
                disabled={isSending}
              >
                <Send size={18} aria-hidden="true" />
                {isSending ? "Sending" : "Send message"}
              </button>
            </form>
          </section>
        </div>
      ) : null}

      {toast ? (
        <div
          role="status"
          className={cn(
            "fixed right-4 bottom-4 z-70 max-w-sm border px-4 py-3 text-sm leading-6 shadow-[0_20px_48px_rgba(0,0,0,0.38)] backdrop-blur-md",
            toast.tone === "success"
              ? "border-[var(--color-mint)]/60 bg-[var(--color-mint)]/12 text-white"
              : "border-red-400/60 bg-red-500/12 text-white"
          )}
        >
          {toast.message}
        </div>
      ) : null}
    </>
  );
}
