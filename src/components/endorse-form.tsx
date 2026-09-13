"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  councilLetter,
  loadEndorsements,
  mailtoCampaign,
  saveEndorsement,
  type Endorsement,
} from "@/lib/endorsements";
import { roles } from "@/lib/content";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  role: string;
  zip: string;
  quote: string;
  publicName: boolean;
};

const empty: FormState = {
  name: "",
  email: "",
  role: roles[0],
  zip: "",
  quote: "",
  publicName: true,
};

export function EndorseForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormState>(empty);
  const [saved, setSaved] = useState<Endorsement | null>(null);
  const [list, setList] = useState<Endorsement[]>([]);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setList(loadEndorsements());
  }, []);

  const letter = useMemo(
    () =>
      saved
        ? councilLetter(saved)
        : councilLetter({
            name: form.name || "[Your name]",
            role: form.role,
            zip: form.zip,
            quote: form.quote,
          }),
    [form, saved],
  );

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError("Name and email are required.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a real email so we can follow up.");
      return;
    }
    setError("");
    const entry: Endorsement = {
      id: crypto.randomUUID(),
      name: form.name.trim(),
      email: form.email.trim(),
      role: form.role,
      zip: form.zip.trim(),
      quote: form.quote.trim(),
      publicName: form.publicName,
      createdAt: new Date().toISOString(),
    };
    const next = saveEndorsement(entry);
    setList(next);
    setSaved(entry);
    window.location.href = mailtoCampaign(entry, councilLetter(entry));
  }

  async function copyLetter() {
    await navigator.clipboard.writeText(letter);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={cn("grid gap-10", compact ? "" : "lg:grid-cols-[1.05fr_0.95fr]")}>
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" htmlFor="name">
            <Input
              id="name"
              required
              value={form.name}
              className="h-11 bg-background/40"
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
          </Field>
          <Field label="Email" htmlFor="email">
            <Input
              id="email"
              type="email"
              required
              value={form.email}
              className="h-11 bg-background/40"
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
          </Field>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">I am a</p>
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => setForm((f) => ({ ...f, role }))}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm transition-colors",
                  form.role === role
                    ? "border-copper bg-copper text-copper-foreground"
                    : "border-white/15 text-foreground/80 hover:border-copper/50",
                )}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <Field label="ZIP (optional)" htmlFor="zip">
          <Input
            id="zip"
            value={form.zip}
            className="h-11 max-w-40 bg-background/40"
            onChange={(e) => setForm((f) => ({ ...f, zip: e.target.value }))}
          />
        </Field>

        <Field label="Why this matters to you (optional, can be public)" htmlFor="quote">
          <Textarea
            id="quote"
            rows={4}
            value={form.quote}
            className="bg-background/40"
            placeholder="I train downtown at 6 a.m. and would climb this every week."
            onChange={(e) => setForm((f) => ({ ...f, quote: e.target.value }))}
          />
        </Field>

        <label className="flex items-start gap-3 text-sm text-foreground/80">
          <Checkbox
            checked={form.publicName}
            onCheckedChange={(value) =>
              setForm((f) => ({ ...f, publicName: Boolean(value) }))
            }
          />
          Show my first name and role on this site’s local endorsement list
          (this browser only, until we connect a shared list).
        </label>

        {error ? <p className="text-sm text-destructive">{error}</p> : null}

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="submit" className="h-12 px-6 text-base">
            <Mail className="size-4" />
            Sign and email the campaign
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-12 px-6 text-base"
            onClick={copyLetter}
          >
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Letter copied" : "Copy Council letter"}
          </Button>
        </div>
        <p className="text-xs leading-5 text-muted-foreground">
          Signing opens an email to Jamie Murray with your endorsement. Copy the
          letter into a note to Council when you are ready. No account required.
        </p>
      </form>

      <aside className="space-y-6">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <p className="text-xs tracking-[0.2em] text-copper uppercase">
            Letter to Council
          </p>
          <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-6 text-foreground/80">
            {letter}
          </pre>
        </div>
        {list.length > 0 ? (
          <div>
            <p className="text-xs tracking-[0.2em] text-copper uppercase">
              Names on this device · {list.length}
            </p>
            <ul className="mt-3 space-y-3">
              {list
                .filter((item) => item.publicName)
                .slice(0, 6)
                .map((item) => (
                  <li
                    key={item.id}
                    className="rounded-xl border border-white/10 px-4 py-3 text-sm"
                  >
                    <p className="font-medium">
                      {item.name.split(" ")[0]} · {item.role}
                    </p>
                    {item.quote ? (
                      <p className="mt-1 text-foreground/70">“{item.quote}”</p>
                    ) : null}
                  </li>
                ))}
            </ul>
          </div>
        ) : null}
      </aside>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
