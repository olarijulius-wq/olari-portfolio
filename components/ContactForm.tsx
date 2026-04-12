"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setFeedback("Please fill in your name, email, and message.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedback(data.error || "The form could not be submitted right now. Please use email instead.");
        return;
      }

      setStatus("success");
      setFeedback("Message sent. I’ll reply as soon as I can.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please use the email fallback below.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm text-zinc-300">
          <span>Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className="rounded-2xl border border-white/[0.08] bg-black px-4 py-3 text-white placeholder:text-zinc-600"
            placeholder="Your name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-zinc-300">
          <span>Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="rounded-2xl border border-white/[0.08] bg-black px-4 py-3 text-white placeholder:text-zinc-600"
            placeholder="you@company.com"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-zinc-300">
          <span>Message</span>
          <textarea
            name="message"
            rows={7}
            value={form.message}
            onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
            className="rounded-2xl border border-white/[0.08] bg-black px-4 py-3 text-white placeholder:text-zinc-600"
            placeholder="Project scope, timeline, goals, or what you’re stuck on."
            required
          />
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06] px-6 text-sm font-semibold text-white transition hover:border-white/[0.22] hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send message"}
        </button>
        <p
          role="status"
          aria-live="polite"
          className={
            status === "error"
              ? "text-sm text-red-300"
              : status === "success"
                ? "text-sm text-emerald-300/90"
                : "text-sm text-zinc-400"
          }
        >
          {feedback}
        </p>
      </div>
    </form>
  );
}
