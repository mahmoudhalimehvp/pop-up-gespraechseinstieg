import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: "info" | "success";
};

export function Chip({ children, className = "", tone = "info", ...rest }: Props) {
  const toneClass =
    tone === "success"
      ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200/80"
      : "bg-[#DBEAFE] text-[#1e40af] ring-1 ring-blue-200/60";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${toneClass} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
