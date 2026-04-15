/**
 * Gleiche Struktur / gleicher Inhalt — nur andere Farbgebung.
 * `default` = bisheriges Blau + Smaragd.
 */
export type OutboundCallColorTheme =
  | "default"
  | "defaultInk"
  | "blueStone"
  | "indigo"
  | "sand"
  | "sandInk";

export type CallModalThemeTokens = {
  headerIcon: string;
  /** Wenn gesetzt: Farbe der Subline unter dem Titel (Standard: grau). */
  headerSubline?: string;
  hintCardBorder: string;
  hintCardBg: string;
  hintTitle: string;
  hintList: string;
  connectedBar: string;
  scriptCard: string;
  scriptLabel: string;
  chipKlingelt: string;
  chipVerbunden: string;
  primaryClose: string;
};

export const CALL_MODAL_THEMES: Record<
  OutboundCallColorTheme,
  CallModalThemeTokens
> = {
  default: {
    headerIcon: "bg-[#EFF6FF] text-[#2563EB]",
    hintCardBorder: "border-blue-100",
    hintCardBg: "#DBEAFE",
    hintTitle: "text-[#1e3a8a]",
    hintList: "text-[#1e40af] marker:text-[#2563EB]",
    connectedBar:
      "border-emerald-100 bg-emerald-50/60 text-[#065f46]",
    /* ! nötig: Card hat sonst bg-white — in Production gewinnt das oft */
    scriptCard:
      "!border !border-emerald-100/80 !bg-[#f0fdf4] !shadow-none",
    scriptLabel: "text-[#047857]",
    chipKlingelt:
      "!bg-[#DBEAFE] !text-[#1e40af] !ring-blue-200/60",
    chipVerbunden:
      "!bg-emerald-50 !text-emerald-800 !ring-emerald-200/80",
    primaryClose: "!bg-[#2563EB] hover:!bg-[#1d4ed8]",
  },
  /** Wie `default` (Blau/Smaragd-Flächen), Text überwiegend schwarz */
  defaultInk: {
    headerIcon: "bg-[#EFF6FF] text-[#111827]",
    hintCardBorder: "border-blue-100",
    hintCardBg: "#DBEAFE",
    hintTitle: "text-[#111827]",
    hintList: "text-[#111827] marker:text-[#111827]",
    connectedBar:
      "border-emerald-100 bg-emerald-50/60 text-[#111827]",
    scriptCard:
      "!border !border-emerald-100/80 !bg-[#f0fdf4] !shadow-none",
    scriptLabel: "text-[#111827]",
    chipKlingelt:
      "!bg-[#DBEAFE] !text-[#111827] !ring-blue-200/60",
    chipVerbunden:
      "!bg-emerald-50 !text-[#111827] !ring-emerald-200/80",
    primaryClose: "!bg-[#2563EB] hover:!bg-[#1d4ed8] !text-white",
  },
  /** Hinweisbox blau, Gesprächseinstieg-Karte Stein, Schrift überall schwarz */
  blueStone: {
    headerIcon: "bg-[#EFF6FF] text-[#111827]",
    headerSubline: "text-[#111827]",
    hintCardBorder: "border-blue-100",
    hintCardBg: "#DBEAFE",
    hintTitle: "text-[#111827]",
    hintList: "text-[#111827] marker:text-[#111827]",
    connectedBar:
      "border-stone-200 bg-stone-100 text-[#111827]",
    scriptCard:
      "!border !border-stone-200 !bg-stone-50 !shadow-none",
    scriptLabel: "text-[#111827]",
    chipKlingelt:
      "!bg-[#DBEAFE] !text-[#111827] !ring-blue-200/60",
    chipVerbunden:
      "!bg-stone-100 !text-[#111827] !ring-stone-300/70",
    primaryClose: "!bg-[#2563EB] hover:!bg-[#1d4ed8] !text-white",
  },
  indigo: {
    headerIcon: "bg-indigo-50 text-indigo-600",
    hintCardBorder: "border-indigo-200/80",
    hintCardBg: "#E0E7FF",
    hintTitle: "text-indigo-950",
    hintList: "text-indigo-900 marker:text-indigo-500",
    connectedBar:
      "border-violet-200 bg-violet-50 text-violet-950",
    scriptCard:
      "!border !border-violet-200/90 !bg-violet-50/80 !shadow-none",
    scriptLabel: "text-violet-900",
    chipKlingelt:
      "!bg-indigo-100 !text-indigo-900 !ring-indigo-200/80",
    chipVerbunden:
      "!bg-violet-100 !text-violet-900 !ring-violet-300/70",
    primaryClose: "!bg-indigo-600 hover:!bg-indigo-700",
  },
  sand: {
    headerIcon: "bg-amber-50 text-amber-800",
    hintCardBorder: "border-amber-200/90",
    hintCardBg: "#FFFBEB",
    hintTitle: "text-amber-950",
    hintList: "text-amber-900 marker:text-amber-600",
    connectedBar:
      "border-teal-200 bg-teal-50 text-teal-950",
    scriptCard: "!border !border-stone-200 !bg-stone-50 !shadow-none",
    scriptLabel: "text-stone-700",
    chipKlingelt:
      "!bg-amber-100 !text-amber-950 !ring-amber-200/90",
    chipVerbunden:
      "!bg-teal-100 !text-teal-900 !ring-teal-300/70",
    primaryClose: "!bg-stone-700 hover:!bg-stone-800",
  },
  /** Wie `sand` (Sand/Stein-Flächen), Text überwiegend schwarz */
  sandInk: {
    headerIcon: "bg-amber-50 text-[#111827]",
    hintCardBorder: "border-amber-200/90",
    hintCardBg: "#FFFBEB",
    hintTitle: "text-[#111827]",
    hintList: "text-[#111827] marker:text-[#111827]",
    connectedBar:
      "border-teal-200 bg-teal-50 text-[#111827]",
    scriptCard: "!border !border-stone-200 !bg-stone-50 !shadow-none",
    scriptLabel: "text-[#111827]",
    chipKlingelt:
      "!bg-amber-100 !text-[#111827] !ring-amber-200/90",
    chipVerbunden:
      "!bg-teal-100 !text-[#111827] !ring-teal-300/70",
    primaryClose: "!bg-stone-700 hover:!bg-stone-800 !text-white",
  },
};
