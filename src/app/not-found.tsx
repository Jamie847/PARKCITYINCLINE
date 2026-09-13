import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col justify-center px-4 pt-24 text-center">
      <p className="text-xs tracking-[0.24em] text-copper uppercase">Off trail</p>
      <h1 className="font-display mt-3 text-4xl">That page isn’t on the mountain.</h1>
      <p className="mt-4 text-foreground/70">
        Try the case, the packet, or add your name.
      </p>
      <div className="mt-8 flex justify-center">
        <Button render={<Link href="/" />} className="h-11 px-5">
          Back to the start
        </Button>
      </div>
    </div>
  );
}
