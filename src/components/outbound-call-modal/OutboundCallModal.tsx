import { useEffect, useId, useState, type ReactNode } from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Chip } from "../ui/Chip";
import {
  CALL_MODAL_THEMES,
  type OutboundCallColorTheme,
} from "./themes";

export type CallConnectionStatus = "dialing" | "connected";

export type OutboundCallSurfaceVariant = "default" | "neutral";

export type OutboundCallModalProps = {
  open: boolean;
  onClose: () => void;
  onEndCall: () => void;
  script: string | ReactNode;
  connectionStatus: CallConnectionStatus;
  /** z. B. „VP ruft Klienten an“ */
  subline?: string;
  /**
   * `neutral`: beim Status „Klingelt“ entfallen Hinweis-Karte und „Klingelt…“-Chip;
   * ansonsten wie Standard.
   */
  surfaceVariant?: OutboundCallSurfaceVariant;
  /** Farbgebung (Inhalt unverändert). Standard = bisheriges Blau/Smaragd. */
  colorTheme?: OutboundCallColorTheme;
};

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function OutboundCallModal({
  open,
  onClose,
  onEndCall,
  script,
  connectionStatus,
  subline = "VP ruft Klienten an",
  surfaceVariant = "default",
  colorTheme = "default",
}: OutboundCallModalProps) {
  const titleId = useId();
  const neutralSurface = surfaceVariant === "neutral";
  const theme = CALL_MODAL_THEMES[colorTheme];
  const [endCallEmphasized, setEndCallEmphasized] = useState(false);

  useEffect(() => {
    if (!open) {
      setEndCallEmphasized(false);
      return;
    }

    setEndCallEmphasized(false);

    const t0 = window.setTimeout(() => setEndCallEmphasized(true), 5_000);
    return () => window.clearTimeout(t0);
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const isDialing = connectionStatus === "dialing";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="flex max-h-[min(900px,100vh-2rem)] w-full max-w-[720px] flex-col overflow-hidden rounded-none bg-white shadow-modal"
      >
        <header className="flex shrink-0 flex-col gap-1 border-b border-[#E5E7EB] px-6 pb-4 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-start gap-3">
              <span
                className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-none ${theme.headerIcon}`}
              >
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h2
                  id={titleId}
                  className="text-lg font-semibold leading-tight text-[#111827]"
                >
                  Ausgehender Anruf
                </h2>
                <p
                  className={`mt-1 text-sm ${theme.headerSubline ?? "text-[#6B7280]"}`}
                >
                  {subline}
                </p>
              </div>
            </div>
            {(!isDialing || !neutralSurface) && (
              <div className="shrink-0 pt-0.5">
                {isDialing ? (
                  <Chip
                    className={`!rounded-none ${theme.chipKlingelt}`}
                  >
                    Klingelt…
                  </Chip>
                ) : (
                  <Chip
                    tone="success"
                    className={`!rounded-none ${theme.chipVerbunden}`}
                  >
                    Verbunden
                  </Chip>
                )}
              </div>
            )}
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto bg-[#F9FAFB] px-6 py-5">
          <div className="flex flex-col gap-4">
            {isDialing && !neutralSurface && (
              <div
                className={`rounded-none border px-4 py-4 ${theme.hintCardBorder}`}
                style={{ backgroundColor: theme.hintCardBg }}
              >
                <div className="min-w-0 space-y-2">
                  <p
                    className={`text-sm font-semibold leading-snug ${theme.hintTitle}`}
                  >
                    Hinweis: Bitte etwa 20 Sekunden warten. Das Telefon des
                    Klienten klingelt gerade.
                  </p>
                  <ul
                    className={`list-disc space-y-1.5 pl-4 text-sm leading-relaxed ${theme.hintList}`}
                  >
                    <li>
                      Falls niemand abnimmt: Lege auf und gib die Anfrage frei.
                      Freigabegrund: „Mailbox“.
                    </li>
                    <li>
                      Falls Klient sich meldet: Nutze den Gesprächseinstieg
                      unten.
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {!isDialing && (
              <p
                className={`rounded-none border px-4 py-3 text-sm leading-relaxed ${theme.connectedBar}`}
              >
                Verbindung steht — führen Sie das Gespräch nach Skript.
              </p>
            )}

            <Card
              padding="lg"
              className={`!rounded-none border shadow-none ${theme.scriptCard}`}
            >
              <p
                className={`border-b border-black/[0.08] pb-3 text-xs font-semibold uppercase tracking-wide ${theme.scriptLabel}`}
              >
                Gesprächseinstieg
              </p>
              <div className="pt-3 text-base leading-relaxed text-[#111827]">
                {typeof script === "string" ? (
                  <p className="whitespace-pre-wrap">{script}</p>
                ) : (
                  script
                )}
              </div>
            </Card>
          </div>
        </div>

        <footer className="flex shrink-0 flex-col gap-3 border-t border-[#E5E7EB] bg-white px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="button"
            variant={endCallEmphasized ? "dangerSoft" : "secondary"}
            onClick={onEndCall}
            className={`!rounded-none order-2 w-full sm:order-1 sm:w-auto ${endCallEmphasized ? "font-semibold" : ""}`}
          >
            Anruf beenden &amp; Schließen
          </Button>
          <Button
            type="button"
            variant="primary"
            onClick={onClose}
            className={`!rounded-none order-1 w-full sm:order-2 sm:min-w-[140px] ${theme.primaryClose}`}
          >
            Schließen
          </Button>
        </footer>
      </div>
    </div>
  );
}
