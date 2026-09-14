"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "site-header fixed inset-x-0 top-0 z-50",
        onHome && "site-header-home",
        open && "site-header-open",
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/#top"
          className="rounded-md shadow-[0_1px_8px_rgba(18,53,44,0.18)] ring-1 ring-black/5"
          onClick={() => setOpen(false)}
          aria-label="Park City Incline home"
        >
          <BrandLogo size="header" priority className="rounded-md" />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href.startsWith("#") ? `/${item.href}` : item.href}
              className="text-sm font-medium text-current/75 transition-colors hover:text-current"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#support"
            className="inline-flex h-10 items-center rounded-full bg-coral px-4 text-sm font-semibold text-white hover:bg-coral/90"
          >
            Add my name
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-current/25 text-current md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-[#12352c]/10 bg-[#fff7ec] px-4 py-6 text-[#12352c] md:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-[#12352c]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#support"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center rounded-full bg-coral px-5 font-semibold text-white"
              >
                Add my name
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
