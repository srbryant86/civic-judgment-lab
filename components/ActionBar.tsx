"use client";

import { useEffect, useState } from "react";

type Props = {
  /** Plain-text (or markdown) payload for Copy / Download. */
  text?: string;
  /** File name for the download (without extension). */
  downloadName?: string;
  /** Show the print button (defaults true). */
  print?: boolean;
  /** Optional trailing note. */
  note?: string;
};

export default function ActionBar({
  text,
  downloadName = "history-judgment-lab",
  print = true,
  note = "Copy, download, and print are demo actions — all client-side, no account required.",
}: Props) {
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (!status) return;
    const t = setTimeout(() => setStatus(null), 2200);
    return () => clearTimeout(t);
  }, [status]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text ?? "");
      setStatus("Copied to clipboard");
    } catch {
      setStatus("Copy unavailable in this browser");
    }
  };

  const onDownload = () => {
    try {
      const blob = new Blob([text ?? ""], { type: "text/markdown;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${downloadName}.md`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setStatus("Downloaded (.md)");
    } catch {
      setStatus("Download unavailable");
    }
  };

  return (
    <div className="action-bar no-print" role="group" aria-label="Page actions">
      {text ? (
        <button type="button" className="btn btn--ghost btn--sm" onClick={onCopy}>
          Copy text
        </button>
      ) : null}
      {text ? (
        <button type="button" className="btn btn--ghost btn--sm" onClick={onDownload}>
          Download .md
        </button>
      ) : null}
      {print ? (
        <button
          type="button"
          className="btn btn--ghost btn--sm"
          onClick={() => window.print()}
        >
          Print / Save as PDF
        </button>
      ) : null}
      <span className="action-bar__note" aria-live="polite">
        {status ?? note}
      </span>
    </div>
  );
}
