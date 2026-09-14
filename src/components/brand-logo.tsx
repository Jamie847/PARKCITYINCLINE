import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  size?: "header" | "footer";
  priority?: boolean;
  className?: string;
};

export function BrandLogo({
  size = "header",
  priority = false,
  className,
}: BrandLogoProps) {
  const header = size === "header";

  return (
    <Image
      src="/images/logo.jpg"
      alt="Park City Incline"
      width={header ? 196 : 420}
      height={header ? 178 : 380}
      priority={priority}
      className={cn(
        "h-auto w-auto object-contain",
        header ? "h-16 sm:h-[4.25rem]" : "h-32 w-auto sm:h-40",
        className,
      )}
    />
  );
}
