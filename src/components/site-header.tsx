"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-forest/95 shadow-sm backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/#top" className="font-display text-lg text-snow sm:text-xl">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-snow/80 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <Button render={<Link href="#support" />} className="h-10 bg-gold px-4 font-semibold text-forest hover:bg-gold/90">
            Support the effort
          </Button>
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex size-10 items-center justify-center rounded-lg border border-white/20 text-snow md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent className="bg-forest text-snow">
            <SheetHeader>
              <SheetTitle className="font-display text-left text-2xl text-snow">
                {site.name}
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-4 px-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
