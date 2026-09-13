import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mountain, Shield, TrainFront, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  campaign,
  councilCase,
  manitouFacts,
  operations,
  stats,
  timeline,
  vailCase,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Vision />
      <Location />
      <Partners />
      <Town />
      <Operations />
      <Compare />
      <Path />
      <Close />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <Image
        src="/images/hero-park-city-incline.png"
        alt="Concept visualization of a steep outdoor staircase rising from Park City Mountain toward the Wasatch ridgeline"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1410] via-[#0c1410]/55 to-[#0c1410]/25" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
        <p className="text-xs tracking-[0.28em] text-copper uppercase">
          A civic campaign for Park City · Vail Resorts land
        </p>
        <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
          {campaign.tagline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/85 sm:text-xl">
          {campaign.lede}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button render={<Link href="/endorse" />} className="h-12 px-6 text-base">
            Add your name
            <ArrowRight className="size-4" />
          </Button>
          <Button
            render={<Link href="/the-case" />}
            variant="outline"
            className="h-12 border-white/20 bg-black/20 px-6 text-base text-foreground backdrop-blur-sm"
          >
            Read the case
          </Button>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-white/10 bg-[#101810]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="font-display text-4xl text-copper sm:text-5xl">{item.value}</p>
            <p className="mt-2 text-sm font-medium">{item.label}</p>
            <p className="mt-1 text-sm leading-6 text-foreground/65">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section id="vision" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.24em] text-copper uppercase">The idea</p>
          <h2 className="font-display mt-3 text-4xl leading-tight text-balance sm:text-5xl">
            Manitou proved the product. Park City has the better stage.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-foreground/78">
            <p>
              Colorado’s Manitou Incline is 2,768 uneven steps and about 2,000
              vertical feet in less than a mile. It is extreme, famous, and —
              even after reservations, shuttles, and neighborhood fights — still
              one of the most visited outdoor workouts in the mountain West.
            </p>
            <p>
              Park City can build our own version at the base of Park City
              Mountain, on land Vail Resorts already operates. Not a gym. Not a
              hotel stairwell. A public-facing timber-and-stone climb that
              starts where Town Lift, transit, and Main Street already meet.
            </p>
            <p>
              The Civic Futures brief calls it the Challenge Incline: 2,744
              steps, 2,000 feet, community capital first, City and resort as
              partners. This site is how we take that idea out of a document and
              put it in front of the people who can say yes.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:mt-10">
            <Image
              src="/images/climbers-incline.png"
              alt="Athletes climbing a steep wooden incline at sunrise"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </figure>
          <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/steps-detail.png"
              alt="Weathered timber steps, granite, and alpine wildflowers"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="paper-section px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.24em] text-[#8a6a32] uppercase">
            Why this mountain
          </p>
          <h2 className="font-display mt-3 text-4xl leading-tight text-[#1c1810] sm:text-5xl">
            The base of Park City Mountain is already the start line.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#3a3226]">
            PCMR rises from 6,900 feet to just over 10,000. Mountain Village
            sits against historic Main Street. Town Lift, free transit, and
            summer hiking already exist. We do not need a new wilderness
            wound. We need a dedicated step corridor on resort fall line, a
            required descent trail, and the humility to copy Manitou’s
            operations — not its traffic mistakes.
          </p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          <figure className="relative min-h-72 overflow-hidden rounded-2xl lg:col-span-3">
            <Image
              src="/images/mountain-village-base.png"
              alt="Aerial concept of Park City Mountain Village in summer"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </figure>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {[
              {
                icon: Mountain,
                title: "Resort terrain",
                body: "A ski fall line Vail already grades, snowmakes, and staffs.",
              },
              {
                icon: TrainFront,
                title: "Town Lift + transit",
                body: "Arrive without parking on a residential street.",
              },
              {
                icon: Trees,
                title: "Least new disturbance",
                body: "Use a corridor that is already a run, not a ridgeline.",
              },
              {
                icon: Shield,
                title: "Operable from day one",
                body: "Hours, waivers, and capacity are lift-ops problems PCMR knows.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/70 p-5 ring-1 ring-[#1c1810]/8"
              >
                <item.icon className="size-5 text-[#8a6a32]" />
                <p className="mt-3 font-medium text-[#1c1810]">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-[#4a4032]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.24em] text-copper uppercase">
          Two rooms that matter
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">
          One proposal. Two audiences. The same mountain.
        </h2>
        <Tabs defaultValue="council" className="mt-10">
          <TabsList className="h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
            <TabsTrigger
              value="council"
              className="h-11 rounded-full border border-white/15 px-5 data-active:border-copper data-active:bg-copper data-active:text-copper-foreground"
            >
              For City Council
            </TabsTrigger>
            <TabsTrigger
              value="vail"
              className="h-11 rounded-full border border-white/15 px-5 data-active:border-copper data-active:bg-copper data-active:text-copper-foreground"
            >
              For Vail Resorts
            </TabsTrigger>
          </TabsList>
          <TabsContent value="council" className="mt-8">
            <CaseGrid items={councilCase} />
          </TabsContent>
          <TabsContent value="vail" className="mt-8">
            <CaseGrid items={vailCase} />
          </TabsContent>
        </Tabs>
        <div className="mt-10">
          <Button render={<Link href="/the-case" />} variant="outline" className="h-11 px-5">
            Open the full briefing
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function CaseGrid({
  items,
}: {
  items: readonly { title: string; body: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-white/10 bg-white/4 p-6"
        >
          <h3 className="font-display text-2xl leading-snug">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-foreground/72">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function Town() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative min-h-[28rem]">
        <Image
          src="/images/main-street-dusk.png"
          alt="Historic Park City Main Street at dusk with the mountain immediately behind town"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1410] via-[#0c1410]/75 to-[#0c1410]/25" />
        <div className="relative mx-auto flex min-h-[28rem] max-w-6xl items-center px-4 py-16 sm:px-6">
          <blockquote className="max-w-xl">
            <p className="font-display text-3xl leading-tight sm:text-4xl">
              The climb is on the mountain. The win is on Main Street.
            </p>
            <p className="mt-5 text-base leading-7 text-foreground/80">
              Manitou’s Incline is famous because it dumps spent, hungry people
              into a small town. Park City already has that town. An Incline at
              PCMR is a shoulder-season Main Street project wearing trail shoes.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Operations() {
  return (
    <section className="border-y border-white/10 bg-[#101810] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.24em] text-copper uppercase">
          How it would actually run
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">
          Copy the climb. Do not copy the congestion.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {operations.map((item, index) => (
            <article key={item.title} className="border-t border-copper/40 pt-5">
              <p className="font-mono text-xs text-copper/80">0{index + 1}</p>
              <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/70">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.24em] text-copper uppercase">
          Side by side
        </p>
        <h2 className="font-display mt-3 text-4xl sm:text-5xl">
          Manitou, then Park City.
        </h2>
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-xs tracking-wider text-copper uppercase">
              <tr>
                <th className="px-4 py-3 font-medium sm:px-6"> </th>
                <th className="px-4 py-3 font-medium sm:px-6">Manitou Incline</th>
                <th className="px-4 py-3 font-medium sm:px-6">Park City proposal</th>
              </tr>
            </thead>
            <tbody>
              {manitouFacts.map((row) => (
                <tr key={row.label} className="border-t border-white/8">
                  <td className="px-4 py-3 font-medium sm:px-6">{row.label}</td>
                  <td className="px-4 py-3 text-foreground/70 sm:px-6">{row.manitou}</td>
                  <td className="px-4 py-3 text-foreground/90 sm:px-6">{row.parkCity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-3xl text-xs leading-5 text-foreground/50">
          Manitou figures are from public City of Colorado Springs, Manitou
          Springs, and regional tourism materials. Visitor counts vary by source
          (roughly 70,000 to 350,000+ depending on methodology and year). We
          treat 250,000+ as a commonly cited modern estimate, not a guarantee
          for Utah.
        </p>
      </div>
    </section>
  );
}

function Path() {
  return (
    <section className="paper-section px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.24em] text-[#8a6a32] uppercase">The path</p>
        <h2 className="font-display mt-3 text-4xl text-[#1c1810] sm:text-5xl">
          We are not asking for a ribbon-cutting. We are asking for a table.
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-5">
          {timeline.map((item) => (
            <li key={item.phase}>
              <p className="text-xs tracking-[0.2em] text-[#8a6a32] uppercase">
                {item.phase}
              </p>
              <h3 className="font-display mt-2 text-2xl text-[#1c1810]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#4a4032]">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Close() {
  return (
    <section className="relative isolate overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      <Image
        src="/images/summit-overlook.png"
        alt="Concept of a climber at a summit overlook above Park City"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0c1410]/70" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-xs tracking-[0.24em] text-copper uppercase">The ask</p>
        <h2 className="font-display mt-4 text-4xl leading-tight sm:text-6xl">
          Put your name on the stairs before they exist.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-foreground/80">
          Council needs a mandate. Vail needs to see the town is not walking
          into another fight. One endorsement is a letter. A few hundred is a
          project.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button render={<Link href="/endorse" />} className="h-12 px-6 text-base">
            Endorse the Incline
          </Button>
          <Button
            render={<Link href="/brief" />}
            variant="outline"
            className="h-12 border-white/20 bg-black/25 px-6 text-base"
          >
            Print the packet
          </Button>
        </div>
      </div>
    </section>
  );
}
