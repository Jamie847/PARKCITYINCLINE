import type { Metadata } from "next";
import Link from "next/link";
import { candidates, methodNote, notUnderConsideration } from "@/lib/locations";
import { manitouLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Council briefing — Manitou evidence and siting",
};

export default function BriefPage() {
  return (
    <article className="bg-snow pt-28 text-forest">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-xs tracking-[0.22em] text-light uppercase">
          Park City Incline · Stakeholder briefing
        </p>
        <h1 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">
          What Manitou proved, and five corridors worth arguing about
        </h1>
        <p className="mt-5 text-lg leading-8 text-forest/75">
          A short evidence brief for Council, Vail Resorts, and — if needed —
          the Utah Olympic Legacy Foundation. This is a community campaign,
          not a 501(c)(3) yet, and not an official City or resort document.
        </p>
        <p className="mt-4 text-sm">
          <Link href="/" className="font-medium text-mid underline underline-offset-4">
            ← Back to the campaign
          </Link>
        </p>

        <section className="mt-12">
          <h2 className="font-display text-3xl">The Manitou evidence</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-forest/80">
            <p>
              Official pages for the original, if you have not climbed it:{" "}
              {manitouLinks.map((item, index) => (
                <span key={item.href}>
                  {index > 0 ? " · " : ""}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-mid underline underline-offset-4"
                  >
                    {item.label.split(" — ")[0]}
                  </a>
                </span>
              ))}
              .
            </p>
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
            Do not paste Manitou’s $6.2 million tourism-tax figure onto Park
            City and call it an Incline forecast. That number is Manitou’s
            whole visitor economy. The transferable mechanic is smaller: a
            three-hour outdoor climb that empties toward a commercial street.
            Even a conservative slice — 80,000 to 150,000 climbs a year, not
            250,000 — is a shoulder-season machine if those people can walk or
            bus to a table. That is why siting is a tax-base question, not a
            scenery question. Park City needs its own model before anyone
            quotes a dollar.
          </p>
          <p className="mt-4 text-sm leading-7 text-forest/80">
            The climb counts are not fuzzy. Visit Manitou publishes 250,000
            Incline visitors a year. City eco-counters in the FIRS minutes
            logged about 197,000 climbs from January through July 2025, with
            48,645 in July. Manitou caps summer starts at 45 per half hour —
            1,125 a day — and still prints those months. Dual lanes on a
            larger destination, next to an airport and an Olympic brand, are
            why “similar or greater” is a fair working theory. It is not a
            promise until parking and a landowner are real. Events that
            already exist there: a firefighter climb each September 11, trail
            closures for Pikes Peak race weekend, and a year-round FKT /
            training culture. The everyday product is the one that pays.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl">Five corridors worth studying</h2>
          <p className="mt-4 text-sm leading-7 text-forest/80">
            Build parking last. The Manitou lesson is that the project dies in
            the neighborhood, not on the mountain. Every candidate below
            already has lots, restrooms, and an operator used to crowds —
            except where land ownership is still the gating question. Grades
            and vertical are measured from USGS elevation data, not estimated.
            Nothing here assumes a corridor is buildable.
          </p>
          <div className="mt-6 space-y-6">
            {candidates.map((item) => (
              <div key={item.id} className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-xs tracking-[0.18em] text-light uppercase">
                  {item.nickname}
                </p>
                <h3 className="font-display mt-1 text-2xl">{item.name}</h3>
                <p className="mt-2 text-sm leading-7 text-forest/70">
                  {item.gradePct}% sustained grade over {item.verticalFt.toLocaleString()} ft
                  of vertical{item.verified ? "" : " (coarse sampling only)"} ·{" "}
                  {item.approachMi} mi from parking
                </p>
                <p className="mt-2 text-sm leading-7">{item.forIt}</p>
                <p className="mt-2 text-sm leading-7 text-forest/70">{item.againstIt}</p>
                <p className="mt-2 text-sm leading-7 text-forest/70">
                  <strong>Unresolved:</strong> {item.unknown}
                </p>
                <p className="mt-2 text-xs leading-6 text-forest/55">
                  Land: {item.landowner}. Main Street: {item.mainStreet}.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm leading-7 text-forest/80">
            <p>
              <strong>{notUnderConsideration.name} is not among them.</strong>
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {notUnderConsideration.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <p className="mt-3">
              Those are the facts as they stand. Readers can draw their own
              conclusion.
            </p>
          </div>
          <p className="mt-6 text-xs leading-6 text-forest/55">{methodNote}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl">What $50,000 is for — and what it is not</h2>
          <p className="mt-4 text-sm leading-7 text-forest/80">
            A public staircase on ski terrain is a capital project in the
            millions. Seed money is not that. It is the study that lets
            Council and the resort say yes or no with a straight face. Until
            there is a landowner, a permit path, and a fiscal home for the
            funds, nobody should be raising construction money.
          </p>
          <p className="mt-4 text-sm leading-7 text-forest/80">
            GoFundMe will not hold donations in escrow until a goal is hit.
            Transfers go to a bank account as they clear. If this campaign
            raises money, the clean version is a restricted project fund or
            fiscal sponsor — Park City Community Foundation is the local
            conversation — so the organizer never parks civic donations in a
            personal account. A personal GoFundMe can still show demand. It
            cannot pretend to be a lockbox.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Proposed $50,000 seed budget
              </caption>
              <thead className="bg-sky text-forest">
                <tr>
                  <th className="px-5 py-3 font-medium">Seed line</th>
                  <th className="px-5 py-3 font-medium">Amount</th>
                  <th className="hidden px-5 py-3 font-medium sm:table-cell">
                    What it buys
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest/10 text-forest/80">
                <tr>
                  <td className="px-5 py-3">Survey, GIS, Payday overlay</td>
                  <td className="px-5 py-3 tabular-nums">$10,000</td>
                  <td className="hidden px-5 py-3 sm:table-cell">
                    Map each corridor’s measured pitch against a surveyed fall
                    line so the vertical is not a guess.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3">Concept alignment memo</td>
                  <td className="px-5 py-3 tabular-nums">$15,000</td>
                  <td className="hidden px-5 py-3 sm:table-cell">
                    Dual-lane stairs, drainage sketch, and a winter-closure
                    plan — not stamped construction drawings.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3">Parking and mobility memo</td>
                  <td className="px-5 py-3 tabular-nums">$6,000</td>
                  <td className="hidden px-5 py-3 sm:table-cell">
                    Prove the Village lots and transit can absorb climbers
                    without dumping cars on Old Town streets.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3">Legal, entity, insurance</td>
                  <td className="px-5 py-3 tabular-nums">$4,000</td>
                  <td className="hidden px-5 py-3 sm:table-cell">
                    Who holds money, who speaks to Council, who is on the hook
                    if someone gets hurt at a site walk.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3">Visuals and Council packet</td>
                  <td className="px-5 py-3 tabular-nums">$5,000</td>
                  <td className="hidden px-5 py-3 sm:table-cell">
                    Aerial overlay, leave-behind brief, meeting materials.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3">Outreach and operations</td>
                  <td className="px-5 py-3 tabular-nums">$3,000</td>
                  <td className="hidden px-5 py-3 sm:table-cell">
                    Domain, list, print, neighborhood meetings.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3">Fees and contingency</td>
                  <td className="px-5 py-3 tabular-nums">$7,000</td>
                  <td className="hidden px-5 py-3 sm:table-cell">
                    Platform fees (~2.9% + $0.30) and the lines that always
                    run over.
                  </td>
                </tr>
                <tr className="font-medium text-forest">
                  <td className="px-5 py-3">Seed total</td>
                  <td className="px-5 py-3 tabular-nums">$50,000</td>
                  <td className="hidden px-5 py-3 sm:table-cell">
                    Studies and a mandate. Not timber, not concrete.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-forest/80">
            The later build is a Class 5 concept range — $2 to $5 million —
            until a survey and geotech exist. Dual-lane stairs at this length,
            plus drainage, retaining, a summit rest area,
            design, and a small maintenance reserve, are why the number is
            not $750,000. Manitou inherited railroad ties. Park City would be
            building on purpose. Treat any per-step hardware quote as a
            fraction of the real job.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl">Permits, insurance, and the mountain already in use</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-forest/80">
            <p>
              Payday is Vail-controlled resort terrain, not City open space.
              A free public staircase on private ski land is first an
              insurance and operations problem for the resort: who is covered
              when a climber falls, who closes the corridor for snowmaking,
              who staffs a rescue. Manitou’s counsel warned that charging
              raised liability. Free is still the cleaner legal posture. It
              is not a waiver.
            </p>
            <p>
              Summer bike and hike products already live on this mountain. The
              stairs cannot occupy the paid downhill bike line or treat guest
              restrooms as public infrastructure. Winter, the staircase
              closes. Snow covers the treads; ski operations keep the hill.
            </p>
            <p>
              Constructed stairs need slope, drainage, and wildlife review.
              City and county permits still apply on private land. If a later
              alignment touches Forest Service ground, NEPA comes with it.
              None of that is a reason to hide the idea. It is a reason the
              $50,000 seed buys a study instead of timber.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl">How to talk to Vail — and what to do if they pass</h2>
          <p className="mt-4 text-sm leading-7 text-forest/80">
            Lead with what they keep, not what the town wants. They keep the
            land, the hours, and a veto. They get Village food and retail in
            May and October without spinning a chair. They get a community
            story after a decade of hard permits. A seasonal pilot — stairs
            for one shoulder season, closed in winter — is an easier first
            yes than a permanent staircase of unknown length.
          </p>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7">
            <li>
              Park City Mountain Village is the Main Street argument. Off-season
              activation, no new CCC on a powder day, climbers finishing
              pointed at Old Town. The sampled pitch is about 26% and 1,146 ft
              — not Manitou. Vail’s mountain-ops team can tell us if a fall
              line is steeper.
            </li>
            <li>
              Canyons Village stays inside the same Vail conversation: more
              parking, weaker Main Street story, terrain not yet re-sampled
              at fine resolution.
            </li>
            <li>
              Deer Valley — Snow Park and East / Jordanelle — are Alterra
              conversations. Snow Park has a verified 31% pitch. East is
              coarse-only. The unknown is whether Alterra wants public access
              on resort terrain at all.
            </li>
            <li>
              Utah Olympic Park area is the only Manitou-class terrain in the
              sample — and land ownership is the gating question. Iron Mountain
              took a conservation easement in 2023; Toll Canyon is Basin
              Recreation open space. A parcel check comes before any drawing.
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
