import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  campaign,
  councilCase,
  manitouFacts,
  vailCase,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "The Case",
  description:
    "Why Park City Council and Vail Resorts should study an Incline at the base of Park City Mountain.",
};

export default function TheCasePage() {
  return (
    <article className="pt-24">
      <header className="mx-auto max-w-3xl px-4 pb-10 sm:px-6">
        <p className="text-xs tracking-[0.24em] text-copper uppercase">Briefing</p>
        <h1 className="font-display mt-3 text-4xl leading-tight sm:text-6xl">
          The case for a Park City Incline
        </h1>
        <p className="mt-5 text-lg leading-8 text-foreground/75">{campaign.lede}</p>
      </header>

      <figure className="relative mx-auto aspect-[16/8] max-w-6xl overflow-hidden px-4 sm:px-6">
        <div className="relative h-full min-h-64 overflow-hidden rounded-2xl">
          <Image
            src="/images/stairs-ascent.png"
            alt="Looking up a steep outdoor staircase on a ski mountain"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </figure>

      <div className="mx-auto max-w-3xl space-y-6 px-4 py-12 text-base leading-8 text-foreground/80 sm:px-6">
        <p>
          This is a citizen proposal. It is not a Vail press release and it is
          not a City capital project. It is an invitation to put a real
          corridor on a map, write real operating rules, and decide whether
          Park City wants the kind of year-round landmark Manitou Springs
          accidentally invented and then had to civilize.
        </p>
        <p>
          The Civic Futures platform brief names this the Challenge Incline: a
          2,744-step, 2,000-vertical-foot outdoor fitness attraction used as
          Park City’s flagship civic project. This campaign takes the physical
          idea — and only the physical idea — and aims it at the two
          institutions that can make land and permission real: City Council
          and Vail Resorts.
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="font-display text-3xl sm:text-4xl">What we are asking</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {campaign.ask.map((item, index) => (
            <li
              key={item}
              className="rounded-2xl border border-white/10 p-6 text-sm leading-7 text-foreground/80"
            >
              <span className="font-mono text-copper">0{index + 1}</span>
              <p className="mt-3">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-3xl sm:text-4xl">For Council</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {councilCase.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white/4 p-6 ring-1 ring-white/10">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/72">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-3xl sm:text-4xl">For Vail Resorts</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {vailCase.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white/4 p-6 ring-1 ring-white/10">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/72">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-3xl">The comparable</h2>
        <dl className="mt-6 divide-y divide-white/10">
          {manitouFacts.map((row) => (
            <div key={row.label} className="grid grid-cols-3 gap-3 py-3 text-sm">
              <dt className="text-foreground/55">{row.label}</dt>
              <dd>{row.manitou}</dd>
              <dd>{row.parkCity}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto flex max-w-3xl flex-col gap-3 px-4 pb-20 sm:flex-row sm:px-6">
        <Button render={<Link href="/endorse" />} className="h-12 px-6">
          Endorse
        </Button>
        <Button render={<Link href="/brief" />} variant="outline" className="h-12 px-6">
          Printable packet
        </Button>
      </section>
    </article>
  );
}
