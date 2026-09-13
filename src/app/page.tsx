import Image from "next/image";
import Link from "next/link";
import { SiteDiagram } from "@/components/site-diagram";
import { SubscribeForm } from "@/components/subscribe-form";
import { Button } from "@/components/ui/button";
import { ruledOut, sites } from "@/lib/locations";
import {
  designFeatures,
  locationStats,
  manitouStats,
  partners,
  questions,
  site,
  stats,
} from "@/lib/site";

export default function Home() {
  return (
    <div id="top">
      <Hero />
      <Stats />
      <Inspiration />
      <Design />
      <Location />
      <Siting />
      <Partners />
      <Questions />
      <Support />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-forest">
      <Image
        src="/images/hero-dual-stairs.png"
        alt="Concept of a dual-lane staircase climbing a Park City ski run"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/70 to-forest/35" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-24 pt-28 sm:px-6">
        <p className="text-xs tracking-[0.28em] text-gold uppercase">{site.badge}</p>
        <h1 className="font-display mt-4 text-5xl leading-[0.95] text-snow sm:text-7xl lg:text-8xl">
          The <span className="text-gold">Park City</span> Incline
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-snow/85 sm:text-xl">
          {site.heroSubhead}
        </p>
        <p className="mt-4 max-w-xl text-sm leading-6 text-snow/70">
          A community proposal. Not an approved City of Park City project, and
          not a Vail Resorts announcement.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            render={<Link href="#support" />}
            className="h-12 bg-gold px-6 text-base font-semibold text-forest hover:bg-gold/90"
          >
            Support the effort
          </Button>
          <Button
            render={<Link href="#inspiration" />}
            variant="outline"
            className="h-12 border-snow/40 bg-transparent px-6 text-base text-snow hover:bg-snow/10"
          >
            Learn more
          </Button>
        </div>
      </div>
      <svg
        className="absolute inset-x-0 bottom-0 h-16 w-full text-snow"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path fill="currentColor" d="M0 80 L0 40 C 240 80 480 0 720 28 C 960 56 1200 8 1440 40 L1440 80 Z" />
      </svg>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-forest">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="font-display text-4xl text-gold sm:text-5xl">{item.value}</p>
            <p className="mt-2 text-sm text-snow/80">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Inspiration() {
  return (
    <section id="inspiration" className="scroll-mt-20 bg-snow px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.24em] text-light uppercase">The inspiration</p>
        <h2 className="font-display mt-3 text-4xl text-forest sm:text-5xl">
          What is the Manitou Incline?
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-forest/80">
          <p>
            The Manitou Incline began as a cable-car grade built to haul pipe
            up Pikes Peak. After a 1990 rockslide killed the railway, the ties
            stayed. Locals started climbing them. For twenty years it was
            technically trespassing — and still drew an estimated 350,000 to
            500,000 trips a year.
          </p>
          <p>
            Colorado Springs and Manitou Springs spent a decade turning that
            unofficial staircase into a legal public trail. They opened it in
            2013 through an intergovernmental agreement: one city runs the
            trail, the other manages the parking. Visit Manitou Springs still
            cites about 250,000 Incline visitors a year. Trail counters in the
            reservation era have recorded on the order of a quarter-million
            climbs in a single eleven-month window.
          </p>
          <p>
            Visit Manitou Springs reports that tourism generated about $6.2
            million in city tax in 2024 — roughly half of that town’s tax take,
            or about $2,600 per local household. That is Manitou’s whole
            visitor economy, not an Incline receipt. The useful fact is
            narrower: a three-hour outdoor climb that empties onto a commercial
            street is the kind of visit Main Street can actually ring up.
          </p>
        </div>
        <div className="mt-10 rounded-2xl bg-sky p-6 sm:p-8">
          <p className="text-xs tracking-[0.2em] text-mid uppercase">Manitou, in numbers</p>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {manitouStats.map((item) => (
              <div key={item.label}>
                <p className="font-display text-3xl text-forest">{item.value}</p>
                <p className="mt-1 text-sm text-forest/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-base leading-8 text-forest/80">
          Park City already has the mountain, the altitude, the Olympic brand,
          and a Main Street that knows how to catch a tired crowd. What we do
          not have is the one piece of outdoor infrastructure that turned a
          former rail grade into a year-round identity. That is the Park City
          Incline.
        </p>
      </div>
    </section>
  );
}

function Design() {
  return (
    <section id="design" className="scroll-mt-20 bg-forest px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display max-w-3xl text-4xl text-snow sm:text-5xl">
          Bigger. Smarter. Built for purpose.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {designFeatures.map((item, index) => (
            <article key={item.title} className="rounded-2xl bg-mid/40 p-6 ring-1 ring-white/10">
              <p className="font-mono text-xs text-gold">0{index + 1}</p>
              <h3 className="font-display mt-2 text-2xl text-snow">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-snow/75">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/steps-dual-lane.png" alt="Dual-lane timber and stone steps" fill className="object-cover" sizes="33vw" />
          </figure>
          <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/summit-overlook-park.png" alt="Summit overlook park concept" fill className="object-cover" sizes="33vw" />
          </figure>
          <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/winter-uphill.png" alt="Winter uphill ski use on the corridor" fill className="object-cover" sizes="33vw" />
          </figure>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="topo-bg scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.24em] text-gold uppercase">Where it goes</p>
        <h2 className="font-display mt-3 text-4xl text-snow sm:text-5xl">One run. Perfect for it.</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-snow/80">
          <p>
            Payday drops from mid-mountain toward the Park City Mountain Village
            lodge on a near-straight fall line. The Village sits at about 6,900
            feet. Payday Express itself rises about 1,278 feet — not 2,000. A
            2,000-foot climb starts on that fall line and continues up existing
            ski terrain. That overlay is the first thing the seed study has to
            prove.
          </p>
          <p>
            The Village parking lot is a three-minute flat walk to the first
            step. Guest restrooms and food are already there; they are resort
            amenities, not a claim that the lodge is a public park. The line
            is visible from town, from the lodge, and from the lift. In winter
            the same corridor becomes a dedicated uphill lane for people who
            are already climbing this mountain before the chairs spin.
          </p>
          <p>
            That is why this site leads with Park City base — Vail land, existing
            lots, and a finish toward Main Street. It is the preferred door, not
            a finished permit.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border border-gold bg-forest/70 p-6 sm:p-8">
          <p className="font-display text-2xl text-gold">Payday Run — Park City Mountain Village Base</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {locationStats.map((item) => (
              <div key={item.label}>
                <p className="font-display text-2xl text-snow">{item.value}</p>
                <p className="mt-1 text-sm text-snow/65">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <figure className="relative min-h-72 overflow-hidden rounded-2xl">
            <Image
              src="/images/aerial-payday.png"
              alt="Aerial concept of a dual-lane staircase on a Park City ski run"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </figure>
          <SiteDiagram />
        </div>
      </div>
    </section>
  );
}

function Siting() {
  return (
    <section className="bg-sky px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.24em] text-mid uppercase">If the first door closes</p>
        <h2 className="font-display mt-3 text-3xl text-forest sm:text-4xl">
          Three sites with parking. One we will not pick a fight over.
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {sites.map((item) => (
            <article key={item.id} className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-xs tracking-[0.18em] text-light uppercase">{item.rank}</p>
              <h3 className="font-display mt-2 text-2xl">{item.name}</h3>
              <p className="mt-3 text-sm leading-7 text-forest/75">{item.why}</p>
              <p className="mt-4 text-xs leading-6 text-forest/55">
                Land: {item.land}. Parking: {item.parking}.
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-forest/70">
          <strong>{ruledOut.name} is not on this list.</strong> {ruledOut.why}{" "}
          <Link href="/brief" className="font-medium text-mid underline underline-offset-4">
            Read the siting brief
          </Link>
        </p>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className="scroll-mt-20 bg-snow px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl text-forest sm:text-5xl">
          Built with Park City, not just for it
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-forest/80">
          Nobody has signed on. The resort is being asked for a right-of-way
          that fills the Village in the shoulder season without a new lift
          ticket. The City is being asked to scope traffic and call it a public
          amenity. The community is being asked for emails — and later, if a
          fiscal sponsor exists, a $50,000 study, not a construction pledge.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {partners.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-forest/75">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Questions() {
  return (
    <section id="questions" className="scroll-mt-20 bg-sky px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.24em] text-mid uppercase">The hard questions</p>
        <h2 className="font-display mt-3 text-4xl text-forest sm:text-5xl">
          What Council and the resort will ask first.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {questions.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl text-forest">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-forest/75">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Support() {
  return (
    <section id="support" className="scroll-mt-20 bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl text-forest sm:text-5xl">Be part of the climb</h2>
        <p className="mt-4 text-base leading-8 text-forest/75">
          Ask one: City Council scopes a public-private conversation. Ask two:
          Park City Mountain looks at the Payday fall line. Add your email so
          that mandate is visible. A $50,000 seed — if we raise it — pays for
          survey, siting, and a Council packet, not construction. The GoFundMe
          goes here only after there is a place other than a personal bank
          account for the money to live.{" "}
          <Link href="/brief" className="font-medium text-mid underline underline-offset-4">
            See the seed budget
          </Link>
          .
        </p>
        <div className="mt-8">
          <SubscribeForm />
        </div>
        <p className="mt-3 text-xs text-forest/50">No spam. Just real updates.</p>
        {site.goFundMeUrl ? (
          <p className="mt-6">
            <a href={site.goFundMeUrl} className="font-medium text-mid underline underline-offset-4">
              Donate to the campaign →
            </a>
          </p>
        ) : (
          <p className="mt-6 text-sm text-forest/55">
            Donate to the campaign → GoFundMe launching with a $50,000 seed goal.
          </p>
        )}
      </div>
    </section>
  );
}
