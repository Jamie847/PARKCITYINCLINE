import Image from "next/image";
import Link from "next/link";
import { SiteDiagram } from "@/components/site-diagram";
import { SubscribeForm } from "@/components/subscribe-form";
import { Button } from "@/components/ui/button";
import { notUnderConsideration } from "@/lib/locations";
import { CandidateCompare } from "@/components/candidate-compare";
import {
  designFeatures,
  designImages,
  economyReasons,
  eventIdeas,
  manitouFacts,
  manitouLinks,
  manitouStats,
  questions,
  site,
  stats,
  story,
  whyParkCity,
} from "@/lib/site";

export default function Home() {
  return (
    <div id="top">
      <Hero />
      <Story />
      <Inspiration />
      <Why />
      <Economy />
      <Design />
      <Location />
      <Questions />
      <Support />
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[100svh] overflow-hidden bg-forest"
    >
      <Image
        src="/images/hero-dual-stairs.jpg"
        alt="Concept of a dual-lane staircase climbing a Park City ski run"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-forest/55 to-gold/25" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-20 pt-28 sm:px-6">
        <p className="inline-flex w-fit rounded-full bg-gold px-3 py-1 text-xs font-semibold tracking-wide text-ink uppercase">
          {site.badge}
        </p>
        <h1 className="font-display mt-5 text-5xl leading-[0.92] text-snow sm:text-7xl lg:text-[6.5rem]">
          Bring the Incline
          <span className="block text-gold"> to Park City.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-snow sm:text-xl">
          {site.heroSubhead}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            render={<Link href="#support" />}
            className="h-12 rounded-full bg-coral px-7 text-base font-semibold text-white hover:bg-coral/90"
          >
            Add my name
          </Button>
          <Button
            render={<Link href="#what" />}
            variant="outline"
            className="h-12 rounded-full border-snow/60 bg-white/10 px-7 text-base text-snow hover:bg-white/20"
          >
            What is an Incline?
          </Button>
        </div>
        <p className="mt-5 max-w-lg text-sm leading-6 text-snow/75">
          A community proposal — not a City project, not a Vail announcement.
          The only ask right now is your email.
        </p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="what" className="scroll-mt-24 bg-snow px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-coral uppercase">
            Thirty seconds
          </p>
          <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
            What, why, and where.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {story.map((item, index) => (
            <article
              key={item.id}
              className="rounded-[1.6rem] bg-white p-7 shadow-[0_12px_40px_-24px_rgba(18,53,44,0.45)] ring-1 ring-ink/5"
            >
              <p className="text-sm font-bold text-coral">
                0{index + 1} · {item.kicker}
              </p>
              <h3 className="font-display mt-3 text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-ink/70">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-3 rounded-[1.6rem] bg-forest px-5 py-8 text-snow sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="font-display text-4xl text-gold">{item.value}</p>
              <p className="mt-1 text-sm text-snow/80">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-ink/55">
          Vertical and step count are set by survey. The climb we want is
          still a 45-minute to two-hour sufferfest — then, if we site it
          right, Main Street.
        </p>
      </div>
    </section>
  );
}

function Inspiration() {
  return (
    <section id="manitou" className="scroll-mt-24 bg-sky px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-forest uppercase">
              If you have never heard of it
            </p>
            <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
              The Manitou Incline is a staircase up a mountain.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-ink/75">
              <p>
                Picture a nearly straight flight of outdoor stairs bolted to the
                side of a Colorado peak. 2,768 steps. 2,000 feet of gain. People
                treat it like a race, a pilgrimage, and a Tuesday morning.
              </p>
              <p>
                It started as a cable-car grade that hauled pipe up Pikes Peak.
                After a 1990 rockslide killed the railway, the ties stayed.
                Locals started climbing them. For twenty years it was technically
                trespassing — and still drew hundreds of thousands of trips a
                year. Colorado Springs and Manitou Springs finally made it legal
                in 2013. They kept it free on purpose.
              </p>
              <p>
                Visit Manitou now cites about 250,000 Incline visits a year. That
                is not “Park City will print $6 million.” It is proof that a
                hard, famous climb manufactures a three-hour visit — and then
                empties onto a commercial street. That is the whole idea.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
              <Image
                src="/images/climbers-incline.jpg"
                alt="Hikers climbing steep wooden railroad-tie steps on a mountain, like the original Manitou Incline"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </figure>
            <div className="rounded-[1.6rem] bg-white p-7 shadow-[0_12px_40px_-24px_rgba(18,53,44,0.45)]">
              <p className="text-sm font-bold text-coral uppercase">Manitou, in numbers</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {manitouStats.map((item) => (
                  <div key={item.label}>
                    <p className="font-display text-3xl text-forest">{item.value}</p>
                    <p className="mt-1 text-sm text-ink/65">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-[1.6rem] bg-white p-6 sm:p-8">
          <p className="font-display text-2xl text-ink">See the real thing</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/65">
            We are not Manitou, and we do not speak for them. If you have never
            climbed it, these are the pages that explain the original — kept
            free, reservation required.
          </p>
          <ul className="mt-5 space-y-3">
            {manitouLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
                >
                  {item.label}
                </a>
                <span className="mt-0.5 block text-sm text-ink/55">{item.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="scroll-mt-24 bg-snow px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-coral uppercase">
          Why here
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl text-ink sm:text-5xl">
          Why Park City should have one.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-ink/70">
          This is not a theme-park ride. It is the outdoor equivalent of a
          public library: hard to use, free to enter, and good for the town
          that hosts it.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-[1.6rem]">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/main-street-after.jpg"
                alt="Concept of climbers walking onto a historic mountain-town Main Street after a hard hike"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <figcaption className="mt-2 text-sm text-ink/55">
              The product is not the stairs. It is the three-hour visit that
              ends here.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-[1.6rem]">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/main-street-dusk.jpg"
                alt="Park City-style Main Street at dusk with string lights and mountains at the end of the street"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <figcaption className="mt-2 text-sm text-ink/55">
              Main Street already knows what to do with a tired crowd.
            </figcaption>
          </figure>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {whyParkCity.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-[1.6rem] p-7 ${
                index % 2 === 0 ? "bg-gold/25" : "bg-forest text-snow"
              }`}
            >
              <h3
                className={`font-display text-2xl ${index % 2 === 0 ? "text-ink" : "text-gold"}`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-3 text-[15px] leading-7 ${index % 2 === 0 ? "text-ink/75" : "text-snow/85"}`}
              >
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Economy() {
  return (
    <section id="economy" className="scroll-mt-24 bg-forest px-4 py-20 text-snow sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">
          Not an expense
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl sm:text-5xl">
          Manitou’s staircase is a visitor machine. Ours could be larger.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-snow/80">
          A town of about 5,000 people hosts a free climb that their tourism
          bureau puts at 250,000 visitors a year. City trail counters logged
          about 197,000 climbs in the first seven months of 2025 — 48,645 in
          July alone. Those are Manitou’s numbers, with one uphill lane and a
          daily cap. They are not a Park City forecast. They are the proof that
          this is economic infrastructure.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {manitouFacts.map((item) => (
            <article key={item.label} className="rounded-[1.4rem] bg-ink/40 p-5 ring-1 ring-gold/40">
              <p className="font-display text-3xl text-gold">{item.value}</p>
              <p className="mt-2 text-sm font-semibold text-snow">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-snow/65">{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {economyReasons.map((item) => (
            <article key={item.title} className="rounded-[1.4rem] bg-snow p-6 text-ink">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">{item.body}</p>
            </article>
          ))}
        </div>
        <h3 className="font-display mt-14 text-3xl text-gold">What you can run on it</h3>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-snow/75">
          Manitou already closes the stairs one morning a year for a firefighter
          climb, and shuts them for Pikes Peak race weekend. The rest of the
          year the “event” is the climb itself. Park City could host the same
          kinds of days — and then close for ski season, which Manitou barely
          has to think about.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {eventIdeas.map((item) => (
            <article key={item.title} className="rounded-[1.4rem] bg-ink/35 p-6">
              <h4 className="font-display text-xl text-gold">{item.title}</h4>
              <p className="mt-2 text-sm leading-7 text-snow/75">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-6 text-snow/50">
          Sources: Visit Manitou Springs Incline facts page (250,000 estimate;
          ~3-hour visit); City of Manitou Springs FIRS minutes, 20 Aug 2025
          (eco-counter Jan–Jul 2025); City of Colorado Springs Incline page
          (45 starts / half hour); Visit Manitou Springs 2024 annual report
          (tourism tax, whole visitor economy). Firefighter Incline Climb:
          Colorado Springs Parks notice, Sept 2025.
        </p>
      </div>
    </section>
  );
}

function Design() {
  return (
    <section className="bg-ink px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">
          How we would build it
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl text-snow sm:text-5xl">
          Dual lanes. A park at the top. Closed for ski season.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {designFeatures.map((item) => (
            <article key={item.title} className="rounded-[1.6rem] bg-forest p-6">
              <h3 className="font-display text-2xl text-gold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-snow/80">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {designImages.map((image) => (
            <figure key={image.src}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="mt-2 text-xs text-snow/55">{image.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs leading-6 text-snow/45">
          Concept renders — not engineered drawings, not an approved alignment,
          not a City or resort endorsement.
        </p>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="where" className="scroll-mt-24 bg-sky px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-forest uppercase">
          The open question
        </p>
        <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
          Five corridors. Help us argue about them.
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-ink/75">
          <p>
            There is a real trade-off here and no obvious winner. The steepest
            ground in the county is not near town. The ground near town is not
            the steepest. A shorter staircase people walk to from Main Street
            may serve Park City better than a bigger one they drive to — or it
            may not, and the bigger one may be the thing worth building once.
          </p>
          <p>
            We measured all five against public elevation data rather than
            guessing. The numbers below are the ground as it is. Which
            corridor is worth studying is a decision for the community, the
            resorts, and the City — not for this website.
          </p>
        </div>

        <div className="mt-10">
          <CandidateCompare />
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <figure className="relative min-h-64 overflow-hidden rounded-[1.6rem]">
            <Image
              src="/images/mountain-village-base.jpg"
              alt="Aerial of a ski-base village and parking lots at the foot of open ski runs"
              fill
              className="object-cover"
              sizes="33vw"
            />
          </figure>
          <figure className="relative min-h-64 overflow-hidden rounded-[1.6rem]">
            <Image
              src="/images/aerial-payday.jpg"
              alt="Aerial concept of a dual-lane staircase on a Park City ski run"
              fill
              className="object-cover"
              sizes="33vw"
            />
          </figure>
          <SiteDiagram />
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-ink/70">
          One instinct, not a decision: Park City Mountain Village is the only
          corridor that finishes pointed at Main Street. Payday Express itself
          rises about 1,278 feet. A surveyed fall line might be steeper than
          the transect. Guest food and restrooms are resort amenities — we
          would be asking to share the doorstep, not to call the lodge a
          public park.
        </p>

        <div className="mt-8 rounded-[1.6rem] border border-ink/10 bg-white p-5 sm:p-6">
          <h3 className="font-display text-lg text-ink">
            {notUnderConsideration.name} is not among them
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-ink/70">
            {notUnderConsideration.facts.map((fact) => (
              <li key={fact} className="flex gap-3">
                <span aria-hidden className="text-ink/30">
                  —
                </span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-7 text-ink/70">
            Those are the facts as they stand. Readers can draw their own
            conclusion about whether a constructed staircase belongs there.{" "}
            <Link
              href="/brief"
              className="font-medium text-forest underline underline-offset-4"
            >
              Read the siting brief
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function Questions() {
  return (
    <section id="questions" className="scroll-mt-24 bg-snow px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-coral uppercase">
          Straight answers
        </p>
        <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
          The questions people ask first.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {questions.map((item) => (
            <article key={item.title} className="rounded-[1.6rem] bg-white p-7 ring-1 ring-ink/8">
              <h3 className="font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-ink/70">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Support() {
  return (
    <section id="support" className="scroll-mt-24 bg-gold px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-ink/70 uppercase">
          The ask
        </p>
        <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
          Add your name.
        </h2>
        <p className="mt-4 text-base leading-8 text-ink/80">
          Tell Council this conversation is worth scoping. Tell the resort
          Payday is worth a look. That is the whole call to action — an email,
          so the list is visible. Money comes later, and only into a restricted
          fund, for a $50,000 study.{" "}
          <Link href="/brief" className="font-semibold underline underline-offset-4">
            See the budget
          </Link>
          .
        </p>
        <div className="mt-8">
          <SubscribeForm />
        </div>
        <p className="mt-3 text-xs text-ink/55">No spam. Real updates when something moves.</p>
        {site.goFundMeUrl ? (
          <p className="mt-6">
            <a href={site.goFundMeUrl} className="font-semibold text-ink underline underline-offset-4">
              Donate to the campaign →
            </a>
          </p>
        ) : null}
      </div>
    </section>
  );
}
