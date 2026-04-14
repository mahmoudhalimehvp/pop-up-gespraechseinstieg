import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "dangerSoft" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#2563EB] text-white hover:bg-[#1d4ed8] focus-visible:ring-2 focus-visible:ring-[#2563EB]/40",
  secondary:
    "border border-[#E5E7EB] bg-white text-[#111827] hover:bg-[#F9FAFB] focus-visible:ring-2 focus-visible:ring-[#2563EB]/25",
  dangerSoft:
    "bg-[#FEE2E2] text-[#7f1d1d] border border-[#fecaca] hover:bg-[#fecaca]/80 focus-visible:ring-2 focus-visible:ring-red-300/50",
  ghost: "text-[#6B7280] hover:bg-[#F3F4F6] focus-visible:ring-2 focus-visible:ring-[#2563EB]/25",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

export function Button({
  variant = "secondary",
  className = "",
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`}
      {...rest}
    />
  );
}
