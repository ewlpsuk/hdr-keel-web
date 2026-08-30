"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const firm = String(data.get("firm") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !firm || !email || !message) {
      setError("Please complete every field.");
      setStatus("error");
      return;
    }

    setError("");
    setStatus("ok");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-white/10 bg-surface p-6"
      noValidate
    >
      <div className="grid gap-4">
        <div>
          <label htmlFor="name" className="mb-1 block font-display text-sm text-text">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-md border border-white/15 bg-background px-3 py-2 text-text"
          />
        </div>
        <div>
          <label htmlFor="firm" className="mb-1 block font-display text-sm text-text">
            Firm
          </label>
          <input
            id="firm"
            name="firm"
            required
            className="w-full rounded-md border border-white/15 bg-background px-3 py-2 text-text"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block font-display text-sm text-text">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-md border border-white/15 bg-background px-3 py-2 text-text"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block font-display text-sm text-text">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full rounded-md border border-white/15 bg-background px-3 py-2 text-text"
          />
        </div>
      </div>
      <div className="mt-6">
        <Button type="submit" variant="primary">
          Send message
        </Button>
      </div>
      <div className="mt-4" aria-live="polite">
        {status === "error" ? <p className="text-sm text-accent">{error}</p> : null}
        {status === "ok" ? (
          <p className="text-sm text-muted">
            This form is a placeholder. The site has no backend, so nothing
            has been sent. Contact details are still to be confirmed. In the
            meantime you can visit{" "}
            <a href="https://hdrcompass.co.uk" className="text-accent-2">
              hdrcompass.co.uk
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
