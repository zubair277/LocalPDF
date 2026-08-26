import { r as React } from "/assets/react-vendor-Bc7KCos-.js";

export function AboutPage({ onPrivacy }) {
  return React.createElement("section", { className: "info-page" },
    React.createElement("p", { className: "eyebrow" }, "About Document Desk"),
    React.createElement("h1", null, "A calmer way to work with PDFs."),
    React.createElement("p", { className: "info-lede" }, "Document Desk brings 22 focused PDF utilities into a single browser workspace. The product shell helps you find and open a task; each established tool owns its file controls and processing workflow."),
    React.createElement("div", { className: "principles" },
      React.createElement("span", null, "Document Desk shell"), React.createElement("span", { "aria-hidden": "true" }, "↓"),
      React.createElement("span", null, "Focused document tool"), React.createElement("span", { "aria-hidden": "true" }, "↓"),
      React.createElement("span", null, "Browser processing runtime"),
    ),
    React.createElement("div", { className: "info-grid" },
      React.createElement("article", null, React.createElement("span", { className: "info-number" }, "01"), React.createElement("h2", null, "Focused by design"), React.createElement("p", null, "Management, protection, extraction, and conversion tools are grouped around the tasks people reach for most.")),
      React.createElement("article", null, React.createElement("span", { className: "info-number" }, "02"), React.createElement("h2", null, "Local processing"), React.createElement("p", null, "The curated tools use browser APIs and locally served runtime assets rather than an application-owned document upload backend.")),
      React.createElement("article", null, React.createElement("span", { className: "info-number" }, "03"), React.createElement("h2", null, "No account layer"), React.createElement("p", null, "Open a tool and work without creating a Document Desk account or handing documents to a product database.")),
    ),
    React.createElement("div", { className: "info-callout" }, React.createElement("div", null, React.createElement("strong", null, "Want the precise data flow?"), React.createElement("p", null, "Read how the curated workspace handles selected files and browser-local state.")), React.createElement("button", { className: "button-secondary", type: "button", onClick: onPrivacy }, "Read privacy details")),
  );
}
