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

const darkFormShell = [
  glassPanelInteractive,
  "border-white/8 bg-[linear-gradient(160deg,rgba(0,0,0,0.92)_0%,rgba(18,18,18,0.9)_55%,rgba(32,32,32,0.86)_100%)]",
  "shadow-[0_20px_60px_rgba(0,0,0,0.45)]",
  "hover:border-white/14 hover:bg-[linear-gradient(160deg,rgba(0,0,0,0.95)_0%,rgba(16,16,16,0.92)_55%,rgba(28,28,28,0.9)_100%)]",
].join(" ");

const darkField = [
  glassField,
  "border-white/8 bg-zinc-950/95 placeholder:text-zinc-500",
  "hover:border-white/16",
  "focus:border-zinc-300 focus:bg-black focus:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_28px_rgba(255,255,255,0.05)]",
].join(" ");

const darkSubmit = [
  glassCta,
  "border-white/10 bg-[linear-gradient(160deg,rgba(12,12,12,0.98)_0%,rgba(38,38,38,0.92)_100%)]",
  "hover:border-zinc-200 hover:bg-[linear-gradient(160deg,rgba(255,255,255,0.94)_0%,rgba(224,224,224,0.96)_100%)] hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]",
  "disabled:hover:border-white/10 disabled:hover:bg-[linear-gradient(160deg,rgba(12,12,12,0.98)_0%,rgba(38,38,38,0.92)_100%)]",
].join(" ");

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
      className={`rounded-3xl p-6 md:p-8 ${darkFormShell}`}
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm text-zinc-200">
          <span>Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className={darkField}
            placeholder="Your name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-zinc-200">
          <span>Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className={darkField}
            placeholder="you@company.com"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-zinc-200">
          <span>Message</span>
          <textarea
            name="message"
            rows={7}
            value={form.message}
            onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
            className={darkField}
            placeholder="Project scope, timeline, goals, or what you’re stuck on."
            required
          />
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className={`${darkSubmit} h-11 rounded-2xl px-6 text-sm disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:text-white disabled:hover:shadow-none`}
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
                : "text-sm text-zinc-300"
          }
        >
          {feedback}
        </p>
      </div>
    </form>
  );
}
