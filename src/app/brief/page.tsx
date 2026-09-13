import type { Metadata } from "next";
import { campaign, councilCase, timeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "Council packet",
  description: "A one-sitting brief for Park City Council and Park City Mountain staff.",
};

export default function BriefPage() {
  return (
    <div className="paper-section min-h-screen pt-24">
      <article className="mx-auto max-w-3xl px-4 py-10 text-[#1c1810] sm:px-6">
        <p className="text-xs tracking-[0.22em] text-[#8a6a32] uppercase">
          Park City Council · Vail Resorts / Park City Mountain
        </p>
        <h1 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">
          Park City Incline — one-page brief
        </h1>
        <p className="mt-4 text-lg leading-8 text-[#3a3226]">{campaign.lede}</p>

        <section className="mt-10">
          <h2 className="font-display text-2xl">The ask</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7">
            {campaign.ask.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-2xl">Why Council should care</h2>
          <ul className="mt-3 space-y-3 text-sm leading-7">
            {councilCase.slice(0, 4).map((item) => (
              <li key={item.title}>
                <strong>{item.title}.</strong> {item.body}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-2xl">Working numbers</h2>
          <ul className="mt-3 space-y-1 text-sm leading-7">
            <li>2,744 steps · 2,000 vertical feet · under one mile</li>
            <li>Sited on existing Park City Mountain resort terrain at the Village / Town Lift edge</li>
            <li>Operations: reservations, waiver, no downhill on steps, transit-first</li>
            <li>First capital concept: $750,000 community raise; $500 name-a-step; $10,000 founding sponsors</li>
            <li>Manitou comparable: public sources cite on the order of 250,000+ annual visits</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-2xl">Sequence</h2>
          <ol className="mt-3 space-y-2 text-sm leading-7">
            {timeline.map((item) => (
              <li key={item.phase}>
                <strong>{item.phase} — {item.title}.</strong> {item.body}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-2xl">Contact</h2>
          <p className="mt-2 text-sm leading-7">
            {campaign.contact.name} · {campaign.contact.email} · {campaign.contact.phone}
          </p>
          <p className="mt-4 text-xs leading-5 text-[#5a4e3c]">
            This document is a community proposal. It is not an approved plan,
            a City publication, or a statement by Vail Resorts. Concept images
            on the companion website are visualizations.
          </p>
        </section>

        <p className="no-print mt-10 text-sm text-[#5a4e3c]">
          Use your browser’s print dialog for a clean packet. The site header
          and footer will hide.
        </p>
      </article>
    </div>
  );
}
