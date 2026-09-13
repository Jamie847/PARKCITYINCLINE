export function SiteDiagram() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-gold/40 bg-forest">
      <svg viewBox="0 0 800 420" className="h-auto w-full" role="img" aria-label="Proposed Payday corridor diagram">
        <rect width="800" height="420" fill="#1A3A2E" />
        <path d="M0 320 C 180 280 280 200 400 140 C 520 80 640 50 800 30 L 800 420 L 0 420 Z" fill="#2D5C45" />
        <path d="M0 360 C 200 330 340 270 480 200 C 600 150 700 120 800 100 L 800 420 L 0 420 Z" fill="#163228" />
        <path d="M430 40 L 470 360" stroke="#C8A84B" strokeWidth="18" strokeLinecap="round" />
        <path d="M458 40 L 498 360" stroke="#F5F8FA" strokeWidth="8" strokeLinecap="round" opacity="0.85" />
        <path d="M390 50 L 430 360" stroke="#4A8C68" strokeWidth="6" strokeDasharray="10 8" />
        <rect x="300" y="348" width="150" height="42" rx="6" fill="#C8A84B" />
        <text x="375" y="374" textAnchor="middle" fill="#1A3A2E" fontSize="13" fontFamily="Georgia, serif">
          Base lodge
        </text>
        <rect x="80" y="348" width="130" height="42" rx="6" fill="#E8F0F5" />
        <text x="145" y="374" textAnchor="middle" fill="#1A3A2E" fontSize="13" fontFamily="Georgia, serif">
          Parking
        </text>
        <text x="490" y="200" fill="#C8A84B" fontSize="13" fontFamily="Georgia, serif">
          Dual-lane stairs
        </text>
        <text x="360" y="80" fill="#F5F8FA" fontSize="13" fontFamily="Georgia, serif">
          Summit overlook
        </text>
        <text x="300" y="230" fill="#4A8C68" fontSize="12" fontFamily="Georgia, serif">
          Payday lift
        </text>
      </svg>
      <figcaption className="px-5 py-4 text-sm leading-6 text-snow/75">
        Proposed location: Payday run, Park City Mountain Village. Concept
        diagram — not a surveyed alignment. Payday Express vertical is about
        1,278 feet; a 2,000-foot climb continues above the lift.
      </figcaption>
    </figure>
  );
}
