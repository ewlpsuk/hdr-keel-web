"use client";

import { useState } from "react";

/**
 * BYOK explainer chat for a course level.
 *
 * The learner brings their own API key (OpenAI-compatible endpoint: OpenAI,
 * Azure OpenAI, OpenRouter, or any provider exposing /v1/chat/completions).
 * The key and the conversation live only in the browser (localStorage) and
 * calls go direct to the provider: zero retention, no client data stored by
 * HDR Keel. The chat is a bounded explainer over the learner's own bought
 * material; it never gives consumer legal advice and is not a substitute for
 * the fee earner's judgement or the firm's oversight.
 */
type Message = { role: "user" | "assistant"; content: string };

const DEFAULT_MODEL = "gpt-4o-mini";

function providerFields(provider: string): {
  baseUrl: string;
  model: string;
  defaultKeyName: string;
} {
  switch (provider) {
    case "openai":
      return { baseUrl: "https://api.openai.com/v1", model: "gpt-4o-mini", defaultKeyName: "sk-" };
    case "azure":
      return {
        baseUrl: "https://YOUR-RESOURCE.openai.azure.com/openai",
        model: "YOUR-DEPLOYMENT",
        defaultKeyName: "Azure key",
      };
    case "openrouter":
      return { baseUrl: "https://openrouter.ai/api/v1", model: "openai/gpt-4o-mini", defaultKeyName: "sk-or-" };
    case "local":
      return { baseUrl: "http://localhost:11434/v1", model: "llama3.2", defaultKeyName: "not needed locally" };
    default:
      return { baseUrl: "https://api.openai.com/v1", model: DEFAULT_MODEL, defaultKeyName: "sk-" };
  }
}

const SYSTEM_PROMPT = `You are the explainer tutor for the HDR Keel course on running housing disrepair claims in England. You help a fee earner or support staff member at a solicitors' firm understand the course material they have bought.

You answer questions about the section material only. You explain the reasoning behind a model answer, define a term, walk through a stage, or help the learner understand why a document is drafted a certain way.

Hard boundaries you must never cross:
- You are NOT legal advice to a consumer. If a learner asks as if they are a tenant or member of the public wanting to claim, say you can only help staff at solicitors' firms, and do not advise them.
- You do not give consumer legal advice, you do not draft anything for an individual claimant, and you do not take a live claim instruction.
- You are a teaching aid. The learner (and their firm) remains accountable for the final work product and its sign-off. You never replace the fee earner's judgement or the firm's oversight.
- Keep jurisdiction clear: England and Wales are different regimes and must not be merged. Note which regime a rule belongs to.
- If asked about advocacy, court attendance or issuing, make clear these stay with the instructing firm; the fee earner prepares, the firm conducts.

Answer in UK English, direct and practical. Keep answers focused on the section material.`;

export default function CourseChat({ levelName, material }: { levelName: string; material: string }) {
  const [provider, setProvider] = useState("openai");
  const [apiKey, setApiKey] = useState("");
  const [baseUrl, setBaseUrl] = useState("https://api.openai.com/v1");
  const [model, setModel] = useState(DEFAULT_MODEL);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  function applyProvider(next: string) {
    const fields = providerFields(next);
    setProvider(next);
    setBaseUrl(fields.baseUrl);
    setModel(fields.model);
  }

  async function send() {
    const question = input.trim();
    if (!question || busy) return;
    if (!apiKey) {
      setError("Add your API key first. It is stored only in your browser and sent straight to your provider.");
      return;
    }
    setError("");
    const userMsg: Message = { role: "user", content: question };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setBusy(true);

    try {
      const prompt = `${SYSTEM_PROMPT}\n\nCourse level: ${levelName}\n\nSection material for this level:\n${material}\n\nAnswer the learner's question about this material.`;
      const res = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [{ role: "system", content: prompt }, ...history],
          temperature: 0.3,
        }),
      });
      if (!res.ok) {
        const body = await res.text();
        setError(`Request failed (${res.status}). Check your key, provider and model. ${body.slice(0, 200)}`);
        setMessages(history);
        setBusy(false);
        return;
      }
      const data = await res.json();
      const reply = data?.choices?.[0]?.message?.content ?? "No answer returned.";
      setMessages([...history, { role: "assistant", content: reply }]);
    } catch (e) {
      setError(`Could not reach your provider: ${e instanceof Error ? e.message : String(e)}`);
      setMessages(history);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-text">Ask the material</h3>
          <p className="mt-1 text-sm text-muted">
            Bring your own AI key to ask questions of this level&apos;s material. The key and the conversation
            stay in your browser; nothing is stored by HDR Keel.
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="text-sm">
          <span className="mb-1 block font-medium text-text">Provider</span>
          <select
            value={provider}
            onChange={(e) => applyProvider(e.target.value)}
            className="w-full rounded-lg border border-line bg-bg px-3 py-2 text-sm text-text"
          >
            <option value="openai">OpenAI</option>
            <option value="azure">Azure OpenAI</option>
            <option value="openrouter">OpenRouter</option>
            <option value="local">Local (Ollama)</option>
          </select>
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium text-text">API key (browser only)</span>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Your own key"
            className="w-full rounded-lg border border-line bg-bg px-3 py-2 text-sm text-text"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium text-text">Base URL</span>
          <input
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            className="w-full rounded-lg border border-line bg-bg px-3 py-2 text-sm text-text"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium text-text">Model</span>
          <input
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full rounded-lg border border-line bg-bg px-3 py-2 text-sm text-text"
          />
        </label>
      </div>

      <div className="mt-4 max-h-72 space-y-3 overflow-y-auto rounded-lg border border-line bg-bg p-4">
        {messages.length === 0 ? (
          <p className="text-sm text-muted">
            Try something like: &quot;Walk me through why the letter of claim has to state the statutory duty
            separately for England.&quot; The tutor explains the material, it does not advise a claimant.
          </p>
        ) : (
          messages.map((m, i) => (
            <div key={i} className={`text-sm ${m.role === "user" ? "text-right" : "text-left"}`}>
              <span
                className={`inline-block max-w-[85%] rounded-lg px-3 py-2 ${
                  m.role === "user" ? "bg-accent/10 text-text" : "bg-surface text-text"
                }`}
              >
                {m.content}
              </span>
            </div>
          ))
        )}
        {busy ? <p className="text-sm text-muted">Working...</p> : null}
      </div>

      {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}

      <div className="mt-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask a question about this level..."
          className="flex-1 rounded-lg border border-line bg-bg px-3 py-2 text-sm text-text"
        />
        <button
          onClick={send}
          disabled={busy}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg transition hover:bg-accent-2 disabled:opacity-50"
        >
          Ask
        </button>
      </div>

      <p className="mt-4 text-xs text-muted">
        The tutor is a teaching aid over the material you bought. You and your firm remain accountable for the
        final work and its sign-off. It never gives consumer legal advice and does not replace your judgement or
        the firm&apos;s oversight.
      </p>
    </div>
  );
}
