import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  padding?: "sm" | "md" | "lg";
};

const pad: Record<NonNullable<Props["padding"]>, string> = {
  sm: "p-3",
  md: "p-5",
  lg: "p-6",
};

export function Card({
  children,
  className = "",
  padding = "md",
  ...rest
}: Props) {
  return (
    <div
      className={`rounded-lg border border-[#E5E7EB] shadow-sm ${pad[padding]} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
