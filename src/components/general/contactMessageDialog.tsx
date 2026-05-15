"use client";

import { Mail, Send, X } from "lucide-react";
import { type FormEvent, type KeyboardEvent, useEffect, useRef, useState } from "react";
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

type FormErrors = Partial<Record<keyof Pick<FormValues, "email" | "message">, string>>;

const emptyValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactMessageDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [toast, setToast] = useState<ToastState>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

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
      return;
    }

    triggerButtonRef.current?.focus();
  }, [isOpen]);

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));

    if ((field === "email" || field === "message") && value.trim()) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const closeDialog = () => {
    setIsOpen(false);
    setErrors({});
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};
    const trimmedEmail = values.email.trim();
    const trimmedMessage = values.message.trim();

    if (!trimmedEmail) {
      nextErrors.email = "Email is required so I can reply.";
    } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
      nextErrors.email = "Enter a valid email address, like you@example.com.";
    }

    if (!trimmedMessage) {
      nextErrors.message = "Add a short message so I know what you want to talk about.";
    }

    setErrors(nextErrors);

    if (nextErrors.email) {
      emailInputRef.current?.focus();
    } else if (nextErrors.message) {
      messageInputRef.current?.focus();
    }

    return Object.keys(nextErrors).length === 0;
  };

  const getFocusableElements = () => {
    if (!dialogRef.current) {
      return [];
    }

    return Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);
  };

  const handleDialogKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();

      if (!isSending) {
        closeDialog();
      }

      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = getFocusableElements();
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (!firstElement || !lastElement) {
      event.preventDefault();
      return;
    }

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
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
        const payload = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(payload?.message || "Message failed to send.");
      }

      setValues(emptyValues);
      setToast({ tone: "success", message: "Message sent. Thanks for reaching out." });
      closeDialog();
    } catch (error) {
      setToast({
        tone: "error",
        message:
          error instanceof Error
            ? error.message
            : "Message failed to send. Your draft is still here if you try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const emailErrorId = errors.email ? "contact-email-error" : undefined;
  const messageErrorId = errors.message ? "contact-message-error" : "contact-message-help";

  return (
    <>
      <button
        ref={triggerButtonRef}
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
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-message-title"
            onKeyDown={handleDialogKeyDown}
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
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={emailErrorId}
                  className={cn(
                    "mt-2 w-full border bg-black/20 px-4 py-3 text-sm text-white transition-colors duration-300 outline-none placeholder:text-white/28 focus:border-[var(--color-mint)]",
                    errors.email ? "border-red-400 bg-red-500/10" : "border-white/12"
                  )}
                  placeholder="you@example.com"
                />
                {errors.email ? (
                  <p id="contact-email-error" className="mt-2 text-sm text-red-300">
                    {errors.email}
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
                  ref={messageInputRef}
                  id="contact-message"
                  name="message"
                  rows={5}
                  maxLength={2000}
                  value={values.message}
                  onChange={(event) => updateValue("message", event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={messageErrorId}
                  className={cn(
                    "mt-2 max-h-64 w-full resize-y border bg-black/20 px-4 py-3 text-sm leading-7 text-white transition-colors duration-300 outline-none placeholder:text-white/28 focus:border-[var(--color-mint)]",
                    errors.message ? "border-red-400 bg-red-500/10" : "border-white/12"
                  )}
                  placeholder="What would you like to talk about?"
                />
                {errors.message ? (
                  <p id="contact-message-error" className="mt-2 text-sm text-red-300">
                    {errors.message}
                  </p>
                ) : (
                  <p id="contact-message-help" className="mt-2 text-sm text-white/45">
                    I look forward to connecting with you.
                  </p>
                )}
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
