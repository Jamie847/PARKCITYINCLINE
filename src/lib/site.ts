export const site = {
  name: "Park City Incline",
  domain: "parkcityincline.com",
  tagline: "Free to climb. Built to last.",
  badge: "A community campaign · Park City, Utah",
  heroHeadline: "The Park City Incline",
  heroSubhead:
    "Colorado has the Manitou Incline — a near-straight outdoor staircase that people fly in to climb. Park City has five real corridors. Do we want the hardest climb, or the climb that pays the town? Those may not be the same place. That is what we are asking you to help decide.",
  description:
    "A community campaign for a free outdoor staircase in Park City — the same idea as Colorado’s Manitou Incline. Five corridors are on the table. Add your name if you want the study.",
  ogTitle: "Park City Incline — A free climb for our mountain town",
  ogDescription:
    "Do we want the hardest climb, or the climb that pays the town? Five measured corridors are on the table. The website is not picking. Signers make the study possible.",
  mission:
    "A community campaign for a free public step trail in Park City. Not an official City or Vail Resorts project. The website is not picking the corridor.",
  contactEmail: "hello@parkcityincline.com",
  goFundMeUrl: process.env.NEXT_PUBLIC_GOFUNDME_URL ?? "",
  goFundMeName: "Build the Park City Incline",
} as const;

export const story = [
  {
    id: "what",
    kicker: "What",
    title: "A public staircase on the mountain.",
    body: "Not a gondola. Not a ticketed attraction. A purpose-built step trail — two lanes so people can go up and down, free in the seasons the mountain is not skiing.",
  },
  {
    id: "why",
    kicker: "Why",
    title: "Because the climb becomes the town.",
    body: "Manitou Springs proved it: a brutal, beautiful staircase turns a quiet morning into a three-hour visit, then lunch. Locals get a dawn workout. The town at the bottom — whichever commercial district the corridor finishes toward — gets the spend.",
  },
  {
    id: "where",
    kicker: "Where",
    title: "Five corridors. You help decide.",
    body: "The steepest ground is not next to town. The ground next to town is not the steepest. PCMR finishes toward Main Street. Olympic Park is the biggest climb — if the land is even available. Adding your name is how that constituency shows up. This website is not picking the corridor.",
  },
] as const;

export const stats = [
  { value: "1,100–1,600 ft", label: "Vertical, by corridor" },
  { value: "Set by survey", label: "Step count" },
  { value: "Free", label: "No ticket. Ever." },
  { value: "3 seasons", label: "Closed for ski ops" },
] as const;

export const manitouStats = [
  { value: "2,768", label: "Steps on the original" },
  { value: "2,000 ft", label: "Elevation gain" },
  { value: "43% / 68%", label: "Avg sustained / steepest" },
  { value: "250,000+", label: "Climbs a year in Manitou" },
] as const;

export const whyParkCity = [
  {
    title: "A workout that belongs to everyone",
    body: "No Epic Pass. No reservation lottery. Dawn, lunch break, or after work — if you can get to the base, you can climb.",
  },
  {
    title: "Shoulder season that actually shows up",
    body: "May and October are quiet here. An Incline is a reason to fly in when the lifts are asleep — and walk into the town at the bottom hungry.",
  },
  {
    title: "We already climb this mountain",
    body: "People already go uphill here. A public staircase would be a three-season climb. In winter the mountain’s first job stays skiing.",
  },
  {
    title: "The Olympic town without the signature climb",
    body: "We have the altitude, the brand, and towns that know what to do with tired people. We do not have the stairs. That is the gap.",
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
    title: "Closed for ski season",
    body: "Snow covers the steps. The staircase is a three-season climb. The corridor yields to ski operations in winter — the mountain’s first job stays its first job.",
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
    caption: "Winter: the mountain skis",
  },
] as const;

export const manitouFacts = [
  {
    value: "250,000",
    label: "Visit Manitou’s annual estimate",
    detail: "The tourism bureau’s public figure for Incline visitors, ages 7 to 70.",
  },
  {
    value: "197,000",
    label: "Climbs counted through July 2025",
    detail: "City eco-counters — not a marketing round-up. July 2025 alone was 48,645.",
  },
  {
    value: "~3 hrs",
    label: "Typical visit, not a drive-by",
    detail: "Most people take about three hours round trip. That is lunch-and-a-beer time.",
  },
  {
    value: "1,125",
    label: "Daily summer cap in Manitou",
    detail: "45 starts each half hour. They throttle demand. Dual lanes would not have to.",
  },
] as const;

export const economyReasons = [
  {
    title: "Park City is a bigger stage",
    body: "Manitou Springs is a town of about 5,000. Park City already draws destination visitors through SLC, the Epic Pass, and an Olympic brand. We would not be inventing tourism. We would be giving shoulder-season guests a three-hour reason to stay and spend.",
  },
  {
    title: "Manitou is throttled. We would not have to be.",
    body: "The original is one lane up, walk down Barr Trail, reservation required. July still cleared 48,000 climbs. Two purpose-built lanes, existing base lots, and no neighborhood street fight are why similar numbers are a fair working theory — not a Park City forecast, and not a promise that ours would be larger.",
  },
  {
    title: "The spend is after the last step",
    body: "The stairs are free. The economy is coffee, lunch, a beer, a shirt, a hotel night if they flew. Visit Manitou reports tourism made about $6.2 million in city tax in 2024 — half their tax take. That is the whole visitor economy, not an Incline receipt. The transferable fact is the visit shape: hard climb, then town.",
  },
] as const;

export const eventIdeas = [
  {
    title: "The everyday product",
    body: "Locals at dawn and visitors at 10 a.m. is the business. Manitou’s money is not a festival weekend. It is a staircase people can use whenever the mountain is not skiing.",
  },
  {
    title: "First-responder and charity climbs",
    body: "Colorado Springs closes the Incline one morning a year for a Firefighter Climb on 9/11. Park City could host the same — plus school, nonprofit, and wounded-warrior days — without turning the trail into a ticketed carnival.",
  },
  {
    title: "First-snow to last-dirt",
    body: "The stairs would be a three-season product. Winter belongs to ski operations. That is a cleaner first conversation with the resort than claiming a year-round lane on a ski run.",
  },
  {
    title: "2034 and the FKT crowd",
    body: "Manitou is a known workout for Olympic and endurance athletes. Fastest-known-time culture, college teams, and a 2034 training story are events that do not need a finish-line arch on Main Street.",
  },
] as const;

export const manitouLinks = [
  {
    href: "https://manitousprings.org/where-to-play/manitou-incline/",
    label: "Visit Manitou Springs — Incline facts",
    note: "Their 250,000-visitor estimate and the three-hour visit",
  },
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
    body: "The ask is a right-of-way on resort terrain, not a claim that the land is public. In return: shoulder-season Village sales without spinning chairs, and a community story the resort can own.",
  },
  {
    title: "Park City Municipal",
    body: "Permitting, traffic scoping, and a public amenity endorsement — so this is civic infrastructure on private resort land, not a ticketed attraction.",
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
  { value: "6,979 ft", label: "Village doorstep (measured)" },
  { value: "26%", label: "Steepest sampled PCMR transect" },
  { value: "1,146 ft", label: "USGS transect vertical — not the lift" },
  { value: "1,278 ft", label: "Payday Express lift spec" },
] as const;

export const questions = [
  {
    title: "Will this dump cars on Old Town?",
    body: "Not if it starts at Payday. Manitou’s original wound was neighborhood parking, not the stairs. Village lots still need a real capacity check — we are not pretending powder Saturdays are empty.",
  },
  {
    title: "Does this close ski runs or the bike park?",
    body: "Winter, the stairs close. Snow covers the treads and ski operations keep the hill. Summer stairs have to miss the paid downhill bike line. That alignment is part of the study.",
  },
  {
    title: "Who pays? Is there a ticket?",
    body: "No tickets. Seed money is a $50,000 study — survey, siting, a Council packet — not timber. The later build is a $2–5 million capital range. There is not yet a 501(c)(3) or a restricted fund to hold donations. That is still unsettled.",
  },
  {
    title: "Who are you, and who owns the land?",
    body: "A community campaign. Not a 501(c)(3) yet, and not a City or Vail announcement. Payday is Vail terrain. Nothing is built until they, and the City, say the conversation is real.",
  },
] as const;

export const nav = [
  { href: "#what", label: "What" },
  { href: "#why", label: "Why" },
  { href: "#economy", label: "Payoff" },
  { href: "#where", label: "Where" },
  { href: "#support", label: "Add your name" },
] as const;
