"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { Send } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Upwork",
    href: "https://www.upwork.com/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.142-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validate = () => {
    const e: Partial<typeof formData> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Enter a valid email";
    if (!formData.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputClass = (field: keyof typeof formData) =>
    `w-full px-4 py-3.5 bg-white/4 border rounded-xl text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-1 transition-all duration-200 ${
      errors[field]
        ? "border-red-500/50 focus:ring-red-500/30"
        : "border-white/8 focus:ring-white/20 focus:border-white/20"
    }`;

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 md:py-36 w-full"
      aria-label="Contact section"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Subtle glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs text-zinc-600 uppercase tracking-[0.2em] font-medium mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Let&apos;s build something
            </h2>
            <p className="text-zinc-500 text-base">
              Have a project in mind? Send me a message and I&apos;ll get back to
              you within 24 hours.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="gradient-border p-10 rounded-2xl text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center mx-auto mb-5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10L8 14L16 6" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Message sent</h3>
                  <p className="text-zinc-500 text-sm">
                    I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-6 text-sm text-zinc-600 hover:text-white transition-colors cursor-pointer"
                  >
                    Send another →
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="gradient-border p-7 md:p-8 rounded-2xl space-y-5"
                  noValidate
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs text-zinc-500 mb-2 font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="Your name"
                      className={inputClass("name")}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400" role="alert">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs text-zinc-500 mb-2 font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="you@example.com"
                      className={inputClass("email")}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400" role="alert">{errors.email}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs text-zinc-500 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Tell me about your project..."
                      className={`${inputClass("message")} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400" role="alert">{errors.message}</p>
                    )}
                  </div>

                  {/* Error state */}
                  {formState === "error" && (
                    <p className="text-sm text-red-400" role="alert">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-zinc-200 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                    aria-label="Send message"
                  >
                    {formState === "loading" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <Send size={14} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex items-center justify-center gap-3"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/25 transition-all duration-200 cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
