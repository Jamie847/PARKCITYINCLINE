"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";
  const solid = !onHome || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-ink/10 bg-[#fff7ec] shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/#top"
          className={cn(
            "font-display text-lg sm:text-xl",
            solid ? "text-ink" : "text-snow",
          )}
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href.startsWith("#") ? `/${item.href}` : item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                solid ? "text-ink/70 hover:text-ink" : "text-snow/85 hover:text-gold",
              )}
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
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-full border md:hidden",
            solid ? "border-ink/15 text-ink" : "border-white/30 text-snow",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-ink/10 bg-snow px-4 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-ink"
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
