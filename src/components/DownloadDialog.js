import { r as React } from "/assets/react-vendor-Bc7KCos-.js";

const formatSize = (size) => {
  if (!Number.isFinite(size)) return "Generated file";
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / 1024 / 1024).toFixed(1)} MB`;
};

const mimeFor = (name) => {
  const lower = name.toLowerCase();
  if (lower.endsWith(".pdf")) return "application/pdf";
  if (lower.endsWith(".zip")) return "application/zip";
  if (lower.endsWith(".docx")) return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  if (lower.endsWith(".xlsx")) return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  if (lower.endsWith(".pptx")) return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
  return "application/octet-stream";
};

export function DownloadDialog({ download, onClose }) {
  const dialogRef = React.useRef(null);
  React.useEffect(() => {
    dialogRef.current?.focus();
    const onKeyDown = (event) => event.key === "Escape" && onClose();
    addEventListener("keydown", onKeyDown);
    return () => removeEventListener("keydown", onKeyDown);
  }, [onClose]);
  if (!download) return null;
  const save = () => {
    const blob = new Blob([download.bytes], { type: mimeFor(download.name) });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = download.name;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  };
  return React.createElement("div", { className: "dialog-backdrop", onMouseDown: (event) => event.target === event.currentTarget && onClose() },
    React.createElement("section", { className: "download-dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": "download-title", tabIndex: -1, ref: dialogRef },
      React.createElement("span", { className: "download-mark", "aria-hidden": "true" }, "✓"),
      React.createElement("h2", { id: "download-title" }, "Your file is ready"),
      React.createElement("p", null, download.name),
      React.createElement("small", null, formatSize(download.size)),
      React.createElement("div", { className: "dialog-actions" },
        React.createElement("button", { className: "button-secondary", type: "button", onClick: onClose }, "Close"),
        download.bytes && React.createElement("button", { className: "button-primary", type: "button", onClick: save }, "Download again"),
      ),
    ),
  );
}
