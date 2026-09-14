import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-snow">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <BrandLogo size="footer" className="rounded-xl ring-1 ring-white/15" />
          <p className="mt-4 text-sm text-gold">{site.tagline}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-snow/70">{site.mission}</p>
          <p className="mt-3 text-sm text-snow/60">
            Press and Council:{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
            >
              {site.contactEmail}
            </a>
          </p>
        </div>
        <div className="text-sm text-snow/60">
          <Link href="/brief" className="hover:text-gold">
            Council briefing
          </Link>
          <span className="mx-2">·</span>
          <Link href="/#what" className="hover:text-gold">
            What / why / where
          </Link>
          <span className="mx-2">·</span>
          <Link href="/#support" className="hover:text-gold">
            Add your name
          </Link>
          <span className="mx-2">·</span>
          <a
            href="https://coloradosprings.gov/parks-recreation-and-cultural-services/page/manitou-incline"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            Manitou Incline
          </a>
        </div>
      </div>
    </footer>
  );
}
