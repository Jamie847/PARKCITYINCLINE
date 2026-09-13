import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Honest answers about traffic, land, cost, and whether this is an official project.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6">
      <p className="text-xs tracking-[0.24em] text-copper uppercase">Questions</p>
      <h1 className="font-display mt-3 text-4xl leading-tight sm:text-6xl">
        The hard questions first.
      </h1>
      <p className="mt-5 text-lg leading-8 text-foreground/75">
        If we cannot answer these in a room with neighbors, we should not build
        anything. The Incline only works if it is designed like infrastructure,
        not a stunt.
      </p>
      <Accordion className="mt-10">
        {faqs.map((item) => (
          <AccordionItem key={item.q} value={item.q}>
            <AccordionTrigger className="text-left font-display text-xl">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-7 text-foreground/75">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-12">
        <Button render={<Link href="/endorse" />} className="h-12 px-6">
          I still want in
        </Button>
      </div>
    </div>
  );
}
