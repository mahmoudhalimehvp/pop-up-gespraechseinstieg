import { useState, type ReactNode } from "react";
import {
  OutboundCallModal,
  type CallConnectionStatus,
  type OutboundCallColorTheme,
  type OutboundCallSurfaceVariant,
} from "./components/outbound-call-modal";

function DemoGesprächseinstieg(): ReactNode {
  return (
    <div className="space-y-4">
      <p>
        Hallo Herr Karapetyan, [dein Name] hier vom{" "}
        <strong className="font-semibold">Verbund Pflegehilfe</strong>.
      </p>
      <p>
        Sie sind auf uns zugekommen, da Sie eine{" "}
        <strong className="font-semibold">Anstellung als Pflegehelfer</strong>{" "}
        in 74223 Flein suchen.
      </p>
      <p>
        Ich habe noch ein paar Rückfragen, um einen{" "}
        <strong className="font-semibold">passenden Arbeitgeber</strong> für Sie
        zu finden. Welche{" "}
        <strong className="font-semibold">Qualifikationen</strong> bringen Sie
        denn mit?
      </p>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(true);
  const [connectionStatus, setConnectionStatus] =
    useState<CallConnectionStatus>("dialing");
  const [demoVersion, setDemoVersion] = useState<1 | 2>(1);
  const [colorTheme, setColorTheme] =
    useState<OutboundCallColorTheme>("blueStone");

  const surfaceVariant: OutboundCallSurfaceVariant =
    demoVersion === 2 ? "neutral" : "default";

  return (
    <div className="min-h-screen bg-[#e5e7eb] p-8">
      <div className="mx-auto max-w-lg space-y-4 rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
        <h1 className="text-lg font-semibold text-[#111827]">Demo</h1>
        <p className="text-sm text-[#6B7280]">
          Status und Modal steuern — Outbound-Popup (CRM-Stil).
        </p>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-[#6B7280]">
            Demo 1 / 2 (gleicher Inhalt, mit / ohne Hinweis-Kiste)
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium ${
                demoVersion === 1
                  ? "border-[#2563EB] bg-[#EFF6FF] text-[#1d4ed8]"
                  : "border-[#E5E7EB] bg-white text-[#374151] hover:bg-[#F9FAFB]"
              }`}
              onClick={() => setDemoVersion(1)}
            >
              Demo 1 (mit Hinweis)
            </button>
            <button
              type="button"
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium ${
                demoVersion === 2
                  ? "border-[#374151] bg-[#F3F4F6] text-[#111827]"
                  : "border-[#E5E7EB] bg-white text-[#374151] hover:bg-[#F9FAFB]"
              }`}
              onClick={() => setDemoVersion(2)}
            >
              Demo 2 (ohne Hinweis)
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-[#6B7280]">
            Farbgebung (nur Farben, gleicher Inhalt)
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium ${
                colorTheme === "default"
                  ? "border-[#2563EB] bg-[#EFF6FF] text-[#1d4ed8]"
                  : "border-[#E5E7EB] bg-white text-[#374151] hover:bg-[#F9FAFB]"
              }`}
              onClick={() => setColorTheme("default")}
            >
              Standard (Blau / Smaragd)
            </button>
            <button
              type="button"
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium ${
                colorTheme === "defaultInk"
                  ? "border-[#111827] bg-[#F3F4F6] text-[#111827]"
                  : "border-[#E5E7EB] bg-white text-[#374151] hover:bg-[#F9FAFB]"
              }`}
              onClick={() => setColorTheme("defaultInk")}
            >
              Standard, schwarze Schrift
            </button>
            <button
              type="button"
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium ${
                colorTheme === "blueStone"
                  ? "border-blue-400 bg-[#DBEAFE] text-[#111827]"
                  : "border-[#E5E7EB] bg-white text-[#374151] hover:bg-[#F9FAFB]"
              }`}
              onClick={() => setColorTheme("blueStone")}
            >
              Blau / Stein, schwarze Schrift
            </button>
            <button
              type="button"
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium ${
                colorTheme === "indigo"
                  ? "border-indigo-400 bg-indigo-50 text-indigo-900"
                  : "border-[#E5E7EB] bg-white text-[#374151] hover:bg-[#F9FAFB]"
              }`}
              onClick={() => setColorTheme("indigo")}
            >
              Alternative Indigo / Violett
            </button>
            <button
              type="button"
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium ${
                colorTheme === "sand"
                  ? "border-amber-300 bg-amber-50 text-amber-950"
                  : "border-[#E5E7EB] bg-white text-[#374151] hover:bg-[#F9FAFB]"
              }`}
              onClick={() => setColorTheme("sand")}
            >
              Alternative Sand / Stein
            </button>
            <button
              type="button"
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium ${
                colorTheme === "sandInk"
                  ? "border-stone-400 bg-stone-100 text-[#111827]"
                  : "border-[#E5E7EB] bg-white text-[#374151] hover:bg-[#F9FAFB]"
              }`}
              onClick={() => setColorTheme("sandInk")}
            >
              Sand / Stein, schwarze Schrift
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-medium text-white hover:bg-[#1d4ed8]"
            onClick={() => {
              setConnectionStatus("dialing");
              setOpen(true);
            }}
          >
            Modal öffnen (Klingelt)
          </button>
          <button
            type="button"
            className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#F9FAFB]"
            onClick={() => setConnectionStatus("connected")}
          >
            → Verbunden
          </button>
          <button
            type="button"
            className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#F9FAFB]"
            onClick={() => setConnectionStatus("dialing")}
          >
            → Klingelt
          </button>
        </div>
      </div>

      <OutboundCallModal
        open={open}
        connectionStatus={connectionStatus}
        script={<DemoGesprächseinstieg />}
        surfaceVariant={surfaceVariant}
        colorTheme={colorTheme}
        onClose={() => setOpen(false)}
        onEndCall={() => setOpen(false)}
      />
    </div>
  );
}
