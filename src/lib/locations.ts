/**
 * Candidate corridors.
 *
 * Grade and vertical figures come from USGS 3DEP elevation data (1 m
 * resolution) sampled 14 September 2026: twelve radial transects per base out
 * to 4.5 km at 150 m spacing, then the three leading candidates re-sampled at
 * 25 m spacing to rule out cliff bands and gullies.
 *
 * These are measurements of the ground, not of a surveyed alignment. A real
 * corridor would follow a chosen fall line and could be steeper or gentler.
 * Nothing here is a proposal, an approved route, or a claim about what any
 * landowner will permit.
 */

export const MANITOU = {
  name: "Manitou Incline",
  grade: 43,
  vertical: 2000,
  note: "2,000 ft over roughly 4,650 ft of run. About 43% average sustained grade; 68% at its steepest.",
} as const;

export type Candidate = {
  id: string;
  name: string;
  nickname: string;
  gradePct: number;
  verticalFt: number;
  runFt: number;
  verified: boolean;
  approachMi: number;
  baseElevFt: number;
  landowner: string;
  mainStreet: string;
  capturesVisit: string;
  forIt: string;
  againstIt: string;
  unknown: string;
};

export const candidates: Candidate[] = [
  {
    id: "pcmr",
    name: "Park City Mountain Village",
    nickname: "The one in the middle of town",
    gradePct: 26,
    verticalFt: 1146,
    runFt: 4429,
    verified: true,
    approachMi: 0.9,
    baseElevFt: 6979,
    landowner: "Vail Resorts",
    mainStreet:
      "Walk, Town Lift, or a short bus ride — climbers finish pointed at Old Town",
    capturesVisit:
      "Old Town / Main Street — on foot or the Town Lift.",
    forIt:
      "This is the only candidate where the climb ends near a historic main street. What Manitou actually demonstrated is not that a staircase draws crowds — it is that the town at the bottom captures what the crowds spend. Parking, restrooms, food and transit already exist here.",
    againstIt:
      "It is the gentlest ground of the candidates. On the sampled transects the steepest sustained pitch averages about 26% — roughly half Manitou's 43% average, and well short of its 68% steepest pitch. A climb here would be a serious staircase, but not the steepest in the country.",
    unknown:
      "Whether a specific ski-run fall line is steeper than a straight transect suggests. This needs a survey, and Park City Mountain's own mountain-operations team would know before anyone else.",
  },
  {
    id: "uop",
    name: "Utah Olympic Park area",
    nickname: "The biggest one",
    gradePct: 40,
    verticalFt: 1581,
    runFt: 3937,
    verified: true,
    approachMi: 1.1,
    baseElevFt: 6930,
    landowner: "Unresolved — see below",
    mainStreet: "Not walkable to Old Town",
    capturesVisit:
      "Kimball Junction — a drive or bus from Main Street. A different catchment, not an absent one.",
    forIt:
      "The only Manitou-class terrain the analysis found anywhere in the county: a sustained 40% average over about 1,580 vertical feet, with individual sections at 78%. Re-sampled at 25 m spacing with no cliff bands. Utah Olympic Park also already has visitor operations, parking, and a 2034 story — and people voluntarily climb the ski-jump stairs today, which is the cheapest demand evidence available.",
    againstIt:
      "The pitch begins about 1.1 miles southwest of Utah Olympic Park's parking, so it needs an approach trail. It is not walkable to Main Street, which removes the strongest economic argument. It also sits in Summit County rather than city jurisdiction.",
    unknown:
      "Land ownership, and this is the gating question for the whole site. The terrain southwest of the Olympic Park runs toward Toll Canyon and Iron Mountain — Iron Mountain took a 160-acre conservation easement in 2023 and Toll Canyon is Basin Recreation open space. If the corridor falls on protected land, it is not a candidate at all. A Summit County parcel check settles this.",
  },
  {
    id: "dv-snowpark",
    name: "Deer Valley — Snow Park",
    nickname: "The polished one",
    gradePct: 31,
    verticalFt: 1379,
    runFt: 4429,
    verified: true,
    approachMi: 1.6,
    baseElevFt: 7221,
    landowner: "Deer Valley Resort (Alterra)",
    mainStreet: "About 1.5 miles to Main Street — bus or bike, not a walk",
    capturesVisit:
      "Deer Valley base. Main Street is a short bus ride, not a walk.",
    forIt:
      "Middle ground on terrain — about 31% sustained over roughly 1,380 vertical feet — with real parking, an established base area, and a shorter run into town than Canyons.",
    againstIt:
      "Deer Valley operates the most access-controlled product of any resort here. A free, unticketed, open-to-everyone amenity runs against the grain of how the mountain is run. The terrain is the easy part of that conversation.",
    unknown:
      "Whether Alterra has any appetite for public access on resort terrain at all. Worth one phone call before any further work.",
  },
  {
    id: "dv-east",
    name: "Deer Valley East / Jordanelle",
    nickname: "The wildcard",
    gradePct: 37,
    verticalFt: 1290,
    runFt: 3445,
    verified: false,
    approachMi: 2.1,
    baseElevFt: 6160,
    landowner: "Mixed — resort expansion and private development",
    mainStreet: "Not walkable; a drive from Old Town",
    capturesVisit:
      "Jordanelle / Mayflower — the least developed catchment of the five today.",
    forIt:
      "Second-steepest ground in the analysis, and the lowest base elevation of any candidate, which means the most vertical available above it. New development means parking and access are being designed right now rather than retrofitted.",
    againstIt:
      "The pitch sits over two miles out. No Main Street connection. Land is a patchwork of resort expansion and private development, which usually means the most complicated negotiation of any option.",
    unknown:
      "Everything, frankly. This one is on the list because the terrain scored well on coarse sampling, not because it has been checked. It has not been re-sampled at fine resolution.",
  },
  {
    id: "canyons",
    name: "Canyons Village",
    nickname: "The easy-parking one",
    gradePct: 28,
    verticalFt: 1234,
    runFt: 4429,
    verified: false,
    approachMi: 0.8,
    baseElevFt: 6889,
    landowner: "Vail Resorts",
    mainStreet: "About five miles — Canyons Village, not Old Town",
    capturesVisit: "Canyons Village base commercial.",
    forIt:
      "The shortest approach from parking of any candidate, the largest lots in the system, a new structure, and a summer gondola already running. Same landowner as Mountain Village, so it can be part of a single conversation.",
    againstIt:
      "Terrain is comparable to Mountain Village without the Main Street payoff. If Vail declines one of its two bases it will likely decline both, so this is a fallback within a conversation rather than an independent option.",
    unknown:
      "Not yet re-sampled at fine resolution. Also whether the summer gondola changes the approach maths in a useful way.",
  },
];

/**
 * Not a candidate, and worth saying why plainly rather than leaving people to
 * ask. These are facts about what has already happened, not predictions.
 */
export const notUnderConsideration = {
  name: "Treasure Hill / Sweeney Switchbacks",
  facts: [
    "Park City voters approved a $64 million open-space bond covering Treasure Hill in 2018, with about 77% in favor.",
    "A permanent conservation easement on the hillside closed in 2025.",
    "Access runs through Old Town residential streets — the same condition that produced Manitou Springs' parking conflict.",
  ],
} as const;

export const methodNote =
  "Grades and vertical figures are measured from USGS 3DEP elevation data (1 m resolution), sampled 14 September 2026. Twelve radial transects were run from each base out to 4.5 km; the three leading candidates were then re-sampled at 25 m spacing to rule out cliff bands. Figures marked verified have had that second pass. These measure the ground, not a surveyed route — a real alignment following a chosen fall line could differ. Nothing here is an approved plan or a claim about what any landowner will permit.";
