export type Endorsement = {
  id: string;
  name: string;
  email: string;
  role: string;
  zip: string;
  quote: string;
  publicName: boolean;
  createdAt: string;
};

const STORAGE_KEY = "pci-endorsements-v1";

export function loadEndorsements(): Endorsement[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Endorsement[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveEndorsement(entry: Endorsement) {
  const next = [entry, ...loadEndorsements()];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function councilLetter(entry: Pick<Endorsement, "name" | "role" | "zip" | "quote">) {
  const extra = entry.quote.trim()
    ? `\n${entry.quote.trim()}\n`
    : "";

  return `Dear Mayor and Park City Council,

I am writing in support of a formal scoping conversation for the Park City Incline — a reservation-managed outdoor staircase at the base of Park City Mountain, inspired by Colorado’s Manitou Incline.

Park City does not need another abstract amenity. It needs a three-season public staircase residents can use, a shoulder-season reason for visitors to fill Main Street, and a public-private study of the corridors that can actually host it.

I ask Council to:
1. Direct staff to scope a public-private partnership with Park City Mountain / Vail Resorts.
2. Study a corridor on existing resort terrain rather than new open-space disturbance.
3. Treat community endorsements as a mandate to look seriously — not as noise.

${extra}Sincerely,
${entry.name}
${entry.role}${entry.zip ? ` · ${entry.zip}` : ""}
`;
}

export function mailtoCampaign(entry: Endorsement, letter: string) {
  const subject = encodeURIComponent(`Park City Incline endorsement — ${entry.name}`);
  const body = encodeURIComponent(
    `New endorsement from the Park City Incline site\n\nName: ${entry.name}\nEmail: ${entry.email}\nRole: ${entry.role}\nZIP: ${entry.zip}\nPublic name: ${entry.publicName ? "yes" : "no"}\n\nQuote:\n${entry.quote || "(none)"}\n\n--- Letter ---\n${letter}`,
  );
  return `mailto:hello@parkcityincline.com?subject=${subject}&body=${body}`;
}
