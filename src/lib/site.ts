export const site = {
  name: "Park City Incline",
  domain: "parkcityincline.com",
  tagline: "Free to climb. Built to last.",
  badge: "Park City, Utah · Community Initiative",
  heroHeadline: "The Park City Incline",
  heroSubhead:
    "A purpose-built step trail rising 2,000 vertical feet from the heart of PCMR — free to climb, forever.",
  description:
    "We're building a world-class step trail at Park City Mountain Resort — 2,000 feet, 2,700 steps, free forever. Sign up to support the effort.",
  ogTitle: "Park City Incline — Free to climb. Built to last.",
  ogDescription:
    "2,000 feet of vertical. Two lanes. Free forever. Help us bring a step trail to Park City.",
  mission:
    "A community campaign for a free public step trail at Park City Mountain. Not an official City or Vail Resorts project.",
  contactEmail: "hello@parkcityincline.com",
  goFundMeUrl: process.env.NEXT_PUBLIC_GOFUNDME_URL ?? "",
  goFundMeName: "Build the Park City Incline",
} as const;

export const stats = [
  { value: "2,000 ft", label: "Vertical gain" },
  { value: "2,700+", label: "Steps (up & down lanes)" },
  { value: "Free", label: "Always. No tickets." },
  { value: "365", label: "Days a year" },
] as const;

export const manitouStats = [
  { value: "2,768", label: "Steps" },
  { value: "2,000 ft", label: "Elevation gain" },
  { value: "45–68%", label: "Average to max grade" },
  { value: "250,000+", label: "Annual visitors" },
] as const;

export const designFeatures = [
  {
    title: "Dedicated up & down lanes",
    body: "Two parallel staircases — one climbing, one descending — so the trail never becomes a single-file bottleneck. Manitou’s congestion problem was designed out from the first sketch.",
  },
  {
    title: "Summit overlook park",
    body: "A rest area at the top with seating, panoramic views, and interpretive signage. The climb ends in a public park, not a turnaround on loose rock.",
  },
  {
    title: "Winter uphill route",
    body: "When the snow comes, the corridor becomes a dedicated skinning and uphill-ski lane — serving Park City’s already-thriving uphill community all year.",
  },
  {
    title: "Payday at the PCMR base",
    body: "The fall line sits on Vail-controlled resort terrain above Mountain Village. The Village already has guest parking, restrooms, and food — this proposal asks to share that doorstep, not to treat the lodge as a public restroom.",
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
  { value: "~6,900 ft", label: "Base elevation" },
  { value: "~8,900 ft", label: "Target top (above Payday lift)" },
  { value: "~2,000 ft", label: "Vertical gain" },
  { value: "3 min", label: "Walk from parking" },
] as const;

export const questions = [
  {
    title: "Will this dump cars on Old Town streets?",
    body: "Not if it is sited on Payday. Manitou’s original wound was parking on neighborhood streets, not the stairs. Treasure Hill / Sweeney is off the table for that reason. Village lots still need a capacity memo before anyone claims parking is solved on a powder Saturday.",
  },
  {
    title: "Does this close ski runs or steal the bike park?",
    body: "Winter use is a dedicated uphill lane on existing ski terrain, not a second staircase. Summer stairs have to miss the paid downhill bike product. That alignment is part of the seed study — it is not assumed.",
  },
  {
    title: "Who pays, and is it ticketed?",
    body: "No tickets. Manitou kept the Incline free because charging created more liability than it solved. Seed funding is a $50,000 study budget. The later build is a $2–5 million capital range, not a $750,000 hardware quote.",
  },
  {
    title: "Who are you, and who owns the land?",
    body: "This is a community campaign, not a 501(c)(3) yet and not a City or Vail announcement. Payday is Vail-controlled resort terrain. Nothing here is built until the landowner and the City say the conversation is real.",
  },
  {
    title: "What about insurance, wildlife, and permits?",
    body: "A free staircase on private resort land is an insurance and operations question for Vail first. Slope, drainage, and wildlife review come with any constructed trail. If a segment later touches federal land, NEPA applies. None of that is skipped.",
  },
  {
    title: "What does the resort actually get?",
    body: "Shoulder-season Village food and retail without lift-ops cost. A managed uphill program in winter. Community goodwill after a hard permitting decade. They keep the land, the hours, and the right to say no to a pilot.",
  },
] as const;

export const nav = [
  { href: "#inspiration", label: "Inspiration" },
  { href: "#design", label: "Design" },
  { href: "#location", label: "Location" },
  { href: "#questions", label: "Questions" },
  { href: "#support", label: "Support" },
] as const;
