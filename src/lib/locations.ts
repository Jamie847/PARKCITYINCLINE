export const sites = [
  {
    id: "pcmr",
    rank: "Preferred",
    name: "Park City Mountain Village",
    land: "Vail Resorts",
    parking: "Existing Village lots + free transit + Town Lift",
    mainStreet: "Walk, bus, or Town Lift — the spend lands on Main Street",
    why: "The Manitou lesson is that the town at the bottom of the stairs captures the money. This is the only site that already has parking, restrooms, food, and a three-minute walk from the lot — and still dumps climbers toward Old Town.",
    risk: "Requires a Vail yes. Payday Express itself rises about 1,280 feet; a true 2,000-foot climb would use the Payday fall line as the start and continue up existing ski terrain.",
  },
  {
    id: "canyons",
    rank: "Fallback",
    name: "Canyons Village",
    land: "Vail Resorts",
    parking: "Largest resort parking in the system, plus a new structure",
    mainStreet: "About five miles / a free bus ride — spend stays in Canyons and Kimball Junction",
    why: "If Mountain Village is the wrong fall line, Canyons has more cars, more lodging, and a summer gondola already running. It is still a Vail conversation.",
    risk: "Same landowner as PCMR. If Vail declines the mountain, they likely decline both bases. Weaker civic case for Park City municipal because Main Street is not the finish line.",
  },
  {
    id: "uop",
    rank: "If Vail passes",
    name: "Utah Olympic Park",
    land: "Utah Olympic Legacy Foundation (501c3); reverts to the State of Utah if the foundation fails",
    parking: "Existing visitor lots on Olympic Parkway",
    mainStreet: "Not walkable to Old Town — I-80 / Bear Hollow geography",
    why: "A different landowner, existing visitor operations, and a 2034 story. The foundation has said the park runs a multi-million-dollar annual operating loss and needs new reasons for people to come.",
    risk: "Summit County / Snyderville Basin, not City Hall. Ticketed-venue culture sits awkwardly next to “free forever.” Ridgeline and neighbor rules are already contested. Strong Olympic brand, weaker Main Street tax story.",
  },
] as const;

export const ruledOut = {
  name: "Sweeney Switchbacks / Treasure Hill",
  why: "Voters paid $64 million to keep Treasure Hill as open space (77% bond, 2018) and a permanent conservation easement closed in 2025. A constructed 2,700-step staircase on that hillside is the wrong political fight. It also recreates Manitou’s original sin: dumping cars onto Old Town streets.",
} as const;
