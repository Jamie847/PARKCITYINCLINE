export const site = {
  name: "Park City Incline",
  domain: "parkcityincline.com",
  tagline: "Free to climb. Built to last.",
  badge: "A community campaign · Park City, Utah",
  heroHeadline: "The Park City Incline",
  heroSubhead:
    "Colorado has the Manitou Incline — a near-straight outdoor staircase that people fly in to climb. Park City has the mountain, the altitude, and Main Street. We want the stairs.",
  description:
    "A community campaign for a free outdoor staircase on Park City Mountain — the same idea as Colorado’s Manitou Incline. Add your name if you want it here.",
  ogTitle: "Park City Incline — A free climb for our mountain town",
  ogDescription:
    "What if Park City had its own Manitou Incline? A free, 2,000-foot step trail from the Village toward the sky. Add your name.",
  mission:
    "A community campaign for a free public step trail at Park City Mountain. Not an official City or Vail Resorts project.",
  contactEmail: "hello@parkcityincline.com",
  goFundMeUrl: process.env.NEXT_PUBLIC_GOFUNDME_URL ?? "",
  goFundMeName: "Build the Park City Incline",
} as const;

export const story = [
  {
    id: "what",
    kicker: "What",
    title: "A public staircase on the mountain.",
    body: "Not a gondola. Not a ticketed attraction. A purpose-built step trail — about 2,000 vertical feet, two lanes so people can go up and down, free every day of the year.",
  },
  {
    id: "why",
    kicker: "Why",
    title: "Because the climb becomes the town.",
    body: "Manitou Springs proved it: a brutal, beautiful staircase turns a quiet morning into a three-hour visit, then lunch. Locals get a dawn workout. Main Street gets a reason to be busy in June.",
  },
  {
    id: "where",
    kicker: "Where",
    title: "Payday, from Mountain Village.",
    body: "Start where the parking already is — not on Old Town streets. The preferred line is Payday at Park City Mountain. Treasure Hill is off the table.",
  },
] as const;

export const stats = [
  { value: "2,000 ft", label: "The climb we want" },
  { value: "2,700+", label: "Steps, up and down" },
  { value: "Free", label: "No ticket. Ever." },
  { value: "365", label: "Days you can show up" },
] as const;

export const manitouStats = [
  { value: "2,768", label: "Steps on the original" },
  { value: "2,000 ft", label: "Elevation gain" },
  { value: "45–68%", label: "How steep it gets" },
  { value: "250,000+", label: "Climbs a year in Manitou" },
] as const;

export const whyParkCity = [
  {
    title: "A workout that belongs to everyone",
    body: "No Epic Pass. No reservation lottery. Dawn, lunch break, or after work — if you can get to the Village, you can climb.",
  },
  {
    title: "Shoulder season that actually shows up",
    body: "May and October are quiet here. An Incline is a reason to fly in when the lifts are asleep — and walk onto Main Street hungry.",
  },
  {
    title: "We already climb this mountain",
    body: "People skin up before the chairs spin. A dedicated winter uphill lane makes that safer. Summer stairs make it a destination.",
  },
  {
    title: "The Olympic town without the signature climb",
    body: "We have the altitude, the brand, and a street that knows what to do with tired people. We do not have the stairs. That is the gap.",
  },
] as const;

export const designFeatures = [
  {
    title: "Two lanes, not a traffic jam",
    body: "One side up, one side down. Manitou’s bottleneck was designed out from the first sketch.",
  },
  {
    title: "A park at the top",
    body: "The climb ends on a deck with a view — benches, a breath, a photo — not a turnaround on loose rock.",
  },
  {
    title: "Winter still works",
    body: "When the snow comes, the corridor becomes a skinning lane. The mountain still skis.",
  },
  {
    title: "Start at the Village",
    body: "Payday sits on Vail terrain above Mountain Village. Guest parking and food are already at the doorstep. We are asking to share it.",
  },
] as const;

export const designImages = [
  {
    src: "/images/crowd-on-stairs.jpg",
    alt: "Concept of people climbing and descending a dual-lane staircase above a mountain village",
    caption: "What it feels like",
  },
  {
    src: "/images/steps-dual-lane.jpg",
    alt: "Concept render: dual-lane stone and timber steps with a center divider rail",
    caption: "Two lanes, one rail",
  },
  {
    src: "/images/summit-cheer.jpg",
    alt: "Concept of friends catching their breath on a summit overlook above a mountain town",
    caption: "The last step",
  },
  {
    src: "/images/winter-uphill.jpg",
    alt: "Concept render: uphill skiers climbing a dedicated winter corridor at sunrise",
    caption: "Winter uphill",
  },
] as const;

export const manitouLinks = [
  {
    href: "https://coloradosprings.gov/parks-recreation-and-cultural-services/page/manitou-incline",
    label: "City of Colorado Springs — official Incline page",
    note: "History, hours, free reservation rules",
  },
  {
    href: "https://www.visitcos.com/things-to-do/outdoors/manitou-incline-near-colorado-springs-colorado/",
    label: "Visit Colorado Springs — Incline visitor guide",
    note: "What the climb actually feels like",
  },
  {
    href: "https://inclinefriends.org/",
    label: "Incline Friends",
    note: "The volunteer nonprofit that helps keep Manitou’s stairs open",
  },
] as const;

export const partners = [
  {
    title: "Park City Mountain Resort",
    body: "The ask is a right-of-way on resort terrain, not a claim that the land is public. In return: shoulder-season Village sales without spinning chairs, a dedicated winter uphill lane, and a community story Vail can own.",
  },
  {
    title: "Park City Municipal",
    body: "Permitting, traffic scoping, and a public amenity endorsement — so this is civic infrastructure on private resort land, not a ticketed attraction and not a Treasure Hill fight.",
  },
  {
    title: "Park City Recreation & trail partners",
    body: "Stewardship and a maintenance MOU with the departments and nonprofits that already keep local trails open — not a new district invented for this page.",
  },
  {
    title: "The Community",
    body: "Donors, advocates, and daily users. The people who will climb it at dawn and keep it belonging to everyone.",
  },
] as const;

export const locationStats = [
  { value: "~6,900 ft", label: "Village doorstep" },
  { value: "~8,900 ft", label: "Target top (above Payday lift)" },
  { value: "~2,000 ft", label: "The climb" },
  { value: "3 min", label: "Walk from the lot" },
] as const;

export const questions = [
  {
    title: "Will this dump cars on Old Town?",
    body: "Not if it starts at Payday. Manitou’s original wound was neighborhood parking, not the stairs. Village lots still need a real capacity check — we are not pretending powder Saturdays are empty.",
  },
  {
    title: "Does this close ski runs or the bike park?",
    body: "Winter is an uphill lane, not a second staircase. Summer stairs have to miss the paid downhill bike line. That alignment is part of the study.",
  },
  {
    title: "Who pays? Is there a ticket?",
    body: "No tickets. Seed money is a $50,000 study — survey, siting, a Council packet — not timber. The later build is a $2–5 million capital range.",
  },
  {
    title: "Who are you, and who owns the land?",
    body: "A community campaign. Not a 501(c)(3) yet, and not a City or Vail announcement. Payday is Vail terrain. Nothing is built until they, and the City, say the conversation is real.",
  },
] as const;

export const nav = [
  { href: "#what", label: "What" },
  { href: "#why", label: "Why" },
  { href: "#where", label: "Where" },
  { href: "#questions", label: "Questions" },
  { href: "#support", label: "Add your name" },
] as const;
