import Link from "next/link";
import { campaign } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0c1410]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl">{campaign.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-foreground/70">
            A community campaign for a Manitou-class incline at the base of Park
            City Mountain. Not an official City or Vail Resorts project.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-copper uppercase">
            Campaign
          </p>
          <ul className="mt-4 space-y-2 text-sm text-foreground/75">
            <li>
              <Link href="/the-case" className="hover:text-copper">
                The case
              </Link>
            </li>
            <li>
              <Link href="/brief" className="hover:text-copper">
                Council packet
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-copper">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/endorse" className="hover:text-copper">
                Endorse
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-copper uppercase">
            Contact
          </p>
          <p className="mt-4 text-sm text-foreground/80">{campaign.contact.name}</p>
          <a
            href={`mailto:${campaign.contact.email}`}
            className="mt-1 block text-sm text-foreground/70 hover:text-copper"
          >
            {campaign.contact.email}
          </a>
          <a
            href={`tel:${campaign.contact.phone.replaceAll("-", "")}`}
            className="mt-1 block text-sm text-foreground/70 hover:text-copper"
          >
            {campaign.contact.phone}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-foreground/45 sm:px-6">
          Park City Incline is a citizen proposal. Images are concept
          visualizations, not photographs of an existing trail. Manitou Incline
          figures are drawn from public city and tourism sources.
        </p>
      </div>
    </footer>
  );
}
