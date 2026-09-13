export const campaign = {
  name: "Park City Incline",
  tagline: "A staircase the Wasatch has never had.",
  lede: "A reservation-managed outdoor incline at the base of Park City Mountain — our version of Colorado’s Manitou Incline, built as a civic landmark and a year-round reason to come to town.",
  contact: {
    name: "Jamie Murray",
    email: "jamescmurray33@gmail.com",
    phone: "847-736-1954",
    city: "Park City, Utah",
  },
  ask: [
    "Park City Council: authorize a staff scoping study and invite Vail Resorts into a public-private conversation.",
    "Vail Resorts / Park City Mountain: evaluate a dedicated step corridor on existing resort terrain at Mountain Village.",
    "Residents and visitors: put your name on the record so officials can see support is real.",
  ],
} as const;

export const stats = [
  {
    value: "2,744",
    label: "Proposed steps",
    detail: "A full Incline-class climb, not a fitness stair in a hotel.",
  },
  {
    value: "2,000'",
    label: "Vertical gain",
    detail: "Modeled on Manitou’s legendary 2,000-foot rise.",
  },
  {
    value: "250k+",
    label: "Manitou visitors / year",
    detail: "Public estimates for Colorado’s Incline — the proof of demand.",
  },
  {
    value: "6,900'",
    label: "PCMR base elevation",
    detail: "The mountain already starts where a world-class climb should.",
  },
] as const;

export const manitouFacts = [
  { label: "Steps", manitou: "2,768", parkCity: "2,744 proposed" },
  { label: "Elevation gain", manitou: "~2,000 ft", parkCity: "2,000 ft target" },
  { label: "Distance", manitou: "0.88 mile", parkCity: "Under 1 mile" },
  { label: "Steepest grade", manitou: "Up to 68%", parkCity: "Ski-fall-line terrain" },
  { label: "Access", manitou: "Free reservation + waiver", parkCity: "Same model, transit-first" },
  { label: "Descent", manitou: "Barr Trail only", parkCity: "Existing PCMR hiking trail" },
  { label: "Land", manitou: "Former cable-car grade", parkCity: "Vail-owned resort base" },
  { label: "Town benefit", manitou: "Year-round destination", parkCity: "Shoulder-season magnet" },
] as const;

export const councilCase = [
  {
    title: "A civic landmark, not another private amenity",
    body: "Park City already has world-class skiing. What we do not have is a single outdoor climb that belongs to the town’s identity the way the Manitou Incline belongs to the Front Range. This is a public-facing fitness commons on resort land — something residents, visitors, and Olympic athletes can share.",
  },
  {
    title: "Shoulder-season economics without a new subdivision",
    body: "Manitou’s Incline draws hundreds of thousands of trips a year into a small mountain town. Park City’s Main Street, transit, and lodging already exist. An Incline fills May, June, September, and October — the months restaurants and hotels actually need bodies — without asking Council to rezone a vacant lot.",
  },
  {
    title: "Traffic lessons are already written",
    body: "Colorado Springs and Manitou Springs spent a decade learning how not to drown a neighborhood. The answer is reservations, timed entries, a signed waiver, a required descent trail, and parking that is not at the first house on the street. We start with that playbook, plus Park City Transit and Town Lift.",
  },
  {
    title: "No blank check from taxpayers",
    body: "The first capital raise is designed as a community campaign — name-a-step, founding sponsors, and milestone-held funds — with the City’s role as partner, permitter, and liaison, not sole financier. Council is being asked to study and convene, not to write a construction check tomorrow.",
  },
  {
    title: "A 2034 story we can own",
    body: "Salt Lake City–Utah 2034 will put a global spotlight on this valley. An Incline at the base of the largest ski resort in America is the kind of simple, photogenic, resident-usable project that outlasts a Games. It is training infrastructure and a welcome mat.",
  },
] as const;

export const vailCase = [
  {
    title: "A summer icon only Park City can claim",
    body: "Every Vail mountain has scenic lifts and an adventure park. None has an Incline. This is a category-defining summer product on land Park City Mountain already operates — a reason Epic Pass holders fly here in July, and a reason locals walk from Main Street at 6 a.m.",
  },
  {
    title: "Use the mountain you already own",
    body: "The proposal is not a wilderness cut. It is a dedicated timber-and-stone step corridor on existing ski fall line above Mountain Village, with descent on trails you already maintain with Mountain Trails Foundation. Operations look like a lift: hours, capacity, waiver, staffed start.",
  },
  {
    title: "Community goodwill after a hard permitting decade",
    body: "Lift upgrades, comfortable carrying capacity, and neighborhood trust have defined the last several years of PCMR politics. An Incline is a visible, year-round gift back to the town — something residents can use that does not increase skier CCC on a powder day.",
  },
  {
    title: "Food, retail, and pass value without more beds",
    body: "Climbers eat. They buy a coffee, a shuttle ride, a recovery beer on Main Street, a scenic lift down, a shop shirt. They do it in summer, when lodging and F&B have slack. That is high-margin, low-cannibalization demand sitting at the Village doorstep.",
  },
  {
    title: "You keep the land. The town brings the mandate.",
    body: "This campaign is asking Council and the community to show up first — so Vail is not walking into a fight. A scoped partnership can keep property control, set operating rules, and share a simple revenue story: reservations, retail, and lift tickets, not a land giveaway.",
  },
] as const;

export const operations = [
  {
    title: "Timed reservations",
    body: "Free or low-cost timed entry, modeled on Manitou’s 45-starts-per-half-hour system. Capacity is a design choice, not an accident.",
  },
  {
    title: "Waiver every visit",
    body: "This is an extreme climb at altitude. A signed waiver, on-site check-in, and clear bailout points are non-negotiable.",
  },
  {
    title: "Up the stairs, down a trail",
    body: "No downhill traffic on the steps. Descent uses an existing PCMR hiking route — the Barr Trail lesson, applied here.",
  },
  {
    title: "Transit first",
    body: "Park City Transit, walk-from-Old-Town, and Town Lift already solve the problem that wrecked Manitou’s neighborhoods. We lean on them from day one.",
  },
  {
    title: "Seasonal hours",
    body: "Dawn-to-afternoon in summer; shorter winter windows if ice allows, or a winter closure that protects the mountain and the brand.",
  },
  {
    title: "Stewardship funding",
    body: "A share of commercial activity can flow to trail maintenance and Mountain Trails Foundation — making the Incline a net positive for the trail system.",
  },
] as const;

export const timeline = [
  {
    phase: "Now",
    title: "Show the mandate",
    body: "This site. Endorsements from residents, athletes, businesses, and visitors. A one-page brief Council can drop in a packet.",
  },
  {
    phase: "Season 1",
    title: "Scope together",
    body: "City staff + Park City Mountain walk the land. Identify a fall-line corridor, descent trail, start plaza, and parking/transit plan. Publish a concept map.",
  },
  {
    phase: "Season 2",
    title: "Study and permits",
    body: "Environmental review, geotech, safety, neighborhood mitigation, and a public-private term sheet. No construction until the rules are honest.",
  },
  {
    phase: "Raise",
    title: "Community capital",
    body: "A $750,000 first-slice campaign: $500 name-a-step, $10,000 founding sponsors, funds released only on permit and construction milestones.",
  },
  {
    phase: "Build",
    title: "Open the stairs",
    body: "Timber, stone, drainage, wayfinding, and a staffed start. Then the first sunrise climb from the Village to the overlook.",
  },
] as const;

export const faqs = [
  {
    q: "Is this an official City or Vail Resorts project?",
    a: "No. This is a community initiative asking Park City Council and Vail Resorts to study a public-private Incline at the base of Park City Mountain. Nothing on this site is an approved plan, a permitted trail, or a corporate announcement.",
  },
  {
    q: "Why the base of Park City Mountain, not open space?",
    a: "Because the mountain already has the vertical, the operations culture, the parking and transit, and a summer business that needs a flagship. Building on resort terrain avoids cutting a new scar into protected open space and puts the start where people already arrive.",
  },
  {
    q: "Will this flood Old Town with cars?",
    a: "Only if we ignore Colorado’s homework. The proposal assumes timed reservations, no on-street dumping, Park City Transit, walk-up access from Main Street, and Village parking that already serves the resort. If those pieces are not real, the project should not open.",
  },
  {
    q: "What about environmental impact?",
    a: "A staircase is still a construction project. It needs drainage, revegetation, wildlife review, and a tight corridor — not a wide clear-cut. Siting on an existing ski fall line is the least-new-disturbance option. A formal study is part of the ask, not a box we skip.",
  },
  {
    q: "Isn’t this just copying Manitou?",
    a: "Yes — on purpose. Manitou proved that a near-vertical outdoor staircase becomes a regional identity, a training ground, and a tourism engine. Park City can do the same with better transit, resort operations, and a town that already lives at 7,000 feet.",
  },
  {
    q: "Who pays?",
    a: "The opening concept is community capital plus a Vail land/operations partnership. Name-a-step at $500 and founding sponsors at $10,000 are the first public offer. The City is asked to convene and permit, not to become the sole banker. Exact costs come after a real corridor is chosen.",
  },
  {
    q: "What about winter and ski operations?",
    a: "The corridor would be designed so winter ski operations remain the mountain’s first job. That may mean a summer-only Incline, a covered or removable tread in places, or a line that sits beside — not on — a primary ski run. Those are scoping questions for PCMR, not slogans.",
  },
  {
    q: "Can beginners use it?",
    a: "The Manitou Incline is rated extreme. Ours should be honest about that: altitude, grade, and no-pets, no-downhill rules. Bailout points, staffed starts, and a culture that celebrates turning around are how you keep people safe without sanding the challenge off the product.",
  },
  {
    q: "How do I help if I’m not a resident?",
    a: "Endorse anyway. Visitors, second-home owners, athletes, and Utahns down-canyon are part of the demand story. Say who you are. Officials need to see the mix.",
  },
] as const;

export const nav = [
  { href: "/#vision", label: "Vision" },
  { href: "/the-case", label: "The Case" },
  { href: "/#partners", label: "Council & Vail" },
  { href: "/faq", label: "FAQ" },
  { href: "/brief", label: "Packet" },
] as const;

export const roles = [
  "Park City resident",
  "Summit County resident",
  "Utah visitor",
  "Local business",
  "Athlete / coach",
  "Elected or staff",
  "Other",
] as const;
