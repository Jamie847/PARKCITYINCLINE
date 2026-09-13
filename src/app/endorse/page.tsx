import type { Metadata } from "next";
import { EndorseForm } from "@/components/endorse-form";

export const metadata: Metadata = {
  title: "Endorse",
  description:
    "Add your name in support of studying a Park City Incline at the base of Park City Mountain.",
};

export default function EndorsePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6">
      <p className="text-xs tracking-[0.24em] text-copper uppercase">Stand up</p>
      <h1 className="font-display mt-3 max-w-3xl text-4xl leading-tight sm:text-6xl">
        Tell Council and Vail you want the stairs studied.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground/75">
        Your name becomes a letter. Copy it to the Mayor and Council. The
        campaign keeps a copy so we can show a real list when we walk into
        chambers or Mountain Village.
      </p>
      <div className="mt-12">
        <EndorseForm />
      </div>
    </div>
  );
}
