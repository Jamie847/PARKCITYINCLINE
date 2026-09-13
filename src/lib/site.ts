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
    "A free public step trail at Park City Mountain — built with the city, the resort, and the people who will climb it.",
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
    body: "The fall line sits on existing resort terrain above Mountain Village: parking, restrooms, and food already at the bottom. Visible from town, the lodge, and the lift.",
  },
] as const;

export const partners = [
  {
    title: "Park City Mountain Resort",
    body: "Land access and right-of-way. Off-season activation that fills the Village when the lifts are quiet. Shared parking, restrooms, and base infrastructure.",
  },
  {
    title: "Park City Municipal",
    body: "Permitting, public-land coordination, and city endorsement — so this is a civic amenity, not a private attraction with a ticket window.",
  },
  {
    title: "Park City Park District",
    body: "Trail stewardship, a maintenance MOU, and a clean connection into the trail network residents already use.",
  },
  {
    title: "The Community",
    body: "Donors, advocates, and daily users. The people who will climb it at dawn and keep it belonging to everyone.",
  },
] as const;

export const locationStats = [
  { value: "~6,900 ft", label: "Base elevation" },
  { value: "~8,900 ft", label: "Summit target" },
  { value: "~2,000 ft", label: "Vertical gain" },
  { value: "3 min", label: "Walk from parking" },
] as const;

export const nav = [
  { href: "#inspiration", label: "Inspiration" },
  { href: "#design", label: "Design" },
  { href: "#location", label: "Location" },
  { href: "#partners", label: "Partners" },
  { href: "#support", label: "Support" },
] as const;
