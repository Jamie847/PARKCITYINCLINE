"use client";

import Image from "next/image";
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
import { campaign, nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#0f1a14]/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-18 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/mark-incline.png"
            alt=""
            width={40}
            height={40}
            className="size-9 rounded-full object-cover ring-1 ring-copper/40"
          />
          <span className="font-display text-lg tracking-tight text-foreground sm:text-xl">
            {campaign.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/75 transition-colors hover:text-copper"
            >
              {item.label}
            </Link>
          ))}
          <Button render={<Link href="/endorse" />} className="h-10 px-4">
            Endorse
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex size-10 items-center justify-center rounded-lg border border-white/15 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent className="bg-[#121c16] text-foreground">
            <SheetHeader>
              <SheetTitle className="font-display text-left text-2xl">
                {campaign.name}
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-4 px-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-foreground/90"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                render={<Link href="/endorse" />}
                className="mt-4 h-12"
                onClick={() => setOpen(false)}
              >
                Add your name
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
