"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, list: "PCI Launch" }),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        stored?: boolean;
      };
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Could not add that email.");
      }
      setStatus("done");
      setMessage(
        data.stored === false
          ? "Received here — the mailing list is not connected yet, so this address was not stored. Check back, or write hello@parkcityincline.com."
          : "",
      );
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Try again.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-[1.4rem] bg-snow px-6 py-8 text-center">
        <p className="font-display text-2xl text-ink">You’re on the list.</p>
        <p className="mt-2 text-sm leading-6 text-ink/70">
          {message ||
            "We’ll send real updates — not noise — as Council, the resort, and the campaign move."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row">
      <Input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@email.com"
        aria-label="Email address"
        className="h-12 flex-1 rounded-full border-ink/15 bg-white px-5 text-base"
      />
      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-12 rounded-full bg-ink px-6 text-base font-semibold text-snow hover:bg-ink/90"
      >
        {status === "loading" ? "Adding…" : "Count me in"}
      </Button>
      {message ? (
        <p className="w-full basis-full text-sm text-destructive">{message}</p>
      ) : null}
    </form>
  );
}
