import type { Metadata } from "next";
import Link from "next/link";
import { ruledOut, sites } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Council briefing — Manitou evidence and siting",
};

export default function BriefPage() {
  return (
    <article className="bg-snow pt-24 text-forest">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-xs tracking-[0.22em] text-light uppercase">
          Park City Incline · Stakeholder briefing
        </p>
        <h1 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">
          What Manitou proved, and where Park City should put the stairs
        </h1>
        <p className="mt-5 text-lg leading-8 text-forest/75">
          A short evidence brief for Council, Vail Resorts, and — if needed —
          the Utah Olympic Legacy Foundation. Not an official City or resort
          document.
        </p>

        <section className="mt-12">
          <h2 className="font-display text-3xl">The Manitou evidence</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-forest/80">
            <p>
              <strong>It was never designed as a trail.</strong> The Incline is
              a former Mt. Manitou Scenic Railway / water-works cable grade.
              After a 1990 rockslide, the rails came off and the ties became an
              unofficial staircase. Colorado Springs legally opened it in
              February 2013 after an intergovernmental agreement with Manitou
              Springs: Colorado Springs runs the trail; Manitou runs the
              parking.
            </p>
            <p>
              <strong>Demand showed up before permission.</strong> The 2011
              Site Development and Management Plan — adopted by both cities —
              estimated 350,000 to 500,000 trips a year while the climb was
              still posted No Trespassing. That is the closest thing American
              trail planning has to a product-market-fit test.
            </p>
            <p>
              <strong>Managed, it is still a quarter-million-person attraction.</strong>{" "}
              Visit Manitou Springs cites about 250,000 Incline visitors a
              year. Colorado Springs trail-counter data after the free
              reservation system launched in August 2020 showed about 251,000
              climbs in eleven months (down from about 319,000 in the same
              window the year before). Summer eco-counter months still clear
              40,000–48,000. The reservation cap is 45 starts per half hour —
              1,125 people a day in summer — and that cap has been approached
              on holiday weekends.
            </p>
            <p>
              <strong>The town at the bottom is the business.</strong> Visit
              Manitou Springs reports that tourism generated about $6.2 million
              in city tax revenue in 2024 (48% of all city tax) and about $6.24
              million in 2025 (52%). That is roughly $2,600–$2,710 of public
              services per household that visitors pay instead of residents.
              The Incline is not the whole tourism economy. It is the rare
              amenity that manufactures a three-hour visit and then releases
              hungry people onto a historic commercial street.
            </p>
            <p>
              <strong>They kept it free on purpose.</strong> The 2011 plan
              rejected a mandatory user fee at opening. Colorado Springs’
              counsel warned that charging could increase liability. The
              reservation is still free. Operations were meant to run on
              donations, parking, grants, and sponsorships — not a general-fund
              ticket window. Park City’s “free forever” line is not romantic.
              It is the model that actually got two city councils to yes.
            </p>
            <p>
              <strong>Parking is the wound they never fully closed.</strong> A
              2010 weekend survey found 516 cars entering the Barr Trail lot
              and only 142 parking there — 72% of that traffic was circling.
              Ruxton Avenue filled by 6 a.m. Residents spent a decade asking
              for the Incline to be “blown up.” The modern answer is a
              mobility hub, a fare-free shuttle, residential-only street
              parking, and a reservation system that now tries to match people
              to spaces. Park City should not copy Ruxton. Park City should
              put the stairs where parking already exists.
            </p>
            <p>
              <strong>Who uses it:</strong> locals, Front Range day-trippers,
              military and endurance athletes, and destination visitors.
              Olympic and professional athletes treat it as a known workout.
              Descent is mandatory on Barr Trail — one-way stairs — because
              two-way traffic on 68% grade is how people get hurt. Our dual
              up/down lanes are the design answer to that injury and
              congestion problem.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl">What this means for Park City money</h2>
          <p className="mt-4 text-sm leading-7 text-forest/80">
            Even a conservative slice of Manitou’s managed volume — say 80,000
            to 150,000 climbs a year, not 250,000 — is a shoulder-season
            machine. Climbers buy coffee, lunch, a beer, a shop shirt, a hotel
            night if they flew. The ones who matter most to Main Street are
            the ones who can walk or bus from the last step to a table. That
            is why siting is not a scenery question. It is a tax-base
            question.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl">Where it should live</h2>
          <p className="mt-4 text-sm leading-7 text-forest/80">
            Build parking last. Steal the Manitou lesson: the project dies in
            the neighborhood, not on the mountain. These are the only three
            sites that already have lots, restrooms, and an operator used to
            crowds.
          </p>
          <div className="mt-6 space-y-6">
            {sites.map((item) => (
              <div key={item.id} className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-xs tracking-[0.18em] text-light uppercase">{item.rank}</p>
                <h3 className="font-display mt-1 text-2xl">{item.name}</h3>
                <p className="mt-2 text-sm leading-7">{item.why}</p>
                <p className="mt-2 text-sm leading-7 text-forest/70">{item.risk}</p>
                <p className="mt-2 text-xs leading-6 text-forest/55">
                  Land: {item.land}. Main Street: {item.mainStreet}.
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-forest/80">
            <strong>{ruledOut.name}.</strong> {ruledOut.why}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl">How to talk to Vail — and what to do if they pass</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7">
            <li>
              Lead with Park City Mountain Village. Off-season activation, no
              new CCC on a powder day, community goodwill after a hard
              permitting decade, Epic Pass summer value.
            </li>
            <li>
              If the fall line is wrong, stay inside Vail and look at Canyons
              Village. More parking, weaker Main Street story, same owner.
            </li>
            <li>
              If Vail is not the partner, take the same drawings to the Utah
              Olympic Legacy Foundation. Different land, existing lots, 2034
              narrative, a nonprofit that has publicly said the park loses
              $2–3 million a year and needs more visitation. Expect Summit
              County, not City Hall, to be the permitter.
            </li>
            <li>
              Do not open on Treasure Hill / Sweeney. That is how this becomes
              an open-space war instead of a tourism project.
            </li>
          </ol>
        </section>

        <p className="mt-12 text-sm">
          <Link href="/#support" className="font-medium text-mid underline underline-offset-4">
            Back to the campaign
          </Link>
        </p>
        <p className="mt-8 text-xs leading-6 text-forest/50">
          Sources: City of Colorado Springs Manitou Incline pages; 2011
          Manitou Incline Site Development and Management Plan; Visit Manitou
          Springs 2024/2025 annual reports; Colorado Springs Gazette
          reservation-year trail counts; FIRS meeting minutes (eco-counter
          tables); Park Record / TownLift coverage of Treasure Hill and the
          Utah Olympic Park development agreement; Vail Resorts summer
          operations notes; Wikipedia lift table for Payday Express vertical.
        </p>
      </div>
    </article>
  );
}
