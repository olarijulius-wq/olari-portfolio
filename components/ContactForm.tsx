"use client";

import { useState } from "react";
import { glassCta, glassField, glassPanelInteractive } from "@/app/lib/glass";

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
    <form
      onSubmit={onSubmit}
      className={`rounded-3xl p-6 md:p-8 ${glassPanelInteractive}`}
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm text-zinc-300">
          <span>Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className={glassField}
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
            className={glassField}
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
            className={glassField}
            placeholder="Project scope, timeline, goals, or what you’re stuck on."
            required
          />
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className={`${glassCta} h-11 rounded-2xl px-6 text-sm disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-white/5 disabled:hover:bg-[linear-gradient(104deg,rgba(253,253,253,0.05)_5%,rgba(240,240,228,0.1)_100%)] disabled:hover:text-white disabled:hover:shadow-none`}
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
