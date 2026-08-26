import { r as React } from "/assets/react-vendor-Bc7KCos-.js";

export function PrivacyPage() {
  return React.createElement("section", { className: "info-page" },
    React.createElement("p", { className: "eyebrow" }, "Privacy at Document Desk"),
    React.createElement("h1", null, "Your files stay in the browser workflow."),
    React.createElement("p", { className: "info-lede" }, "The 22 tools exposed by Document Desk use browser APIs and locally served processing assets. They do not send selected documents to an application-owned upload backend."),
    React.createElement("div", { className: "privacy-summary", role: "list" },
      React.createElement("div", { role: "listitem" }, React.createElement("strong", null, "Select"), React.createElement("span", null, "Choose a document from your device.")),
      React.createElement("span", { "aria-hidden": "true" }, "→"),
      React.createElement("div", { role: "listitem" }, React.createElement("strong", null, "Process"), React.createElement("span", null, "The selected tool runs in this browser.")),
      React.createElement("span", { "aria-hidden": "true" }, "→"),
      React.createElement("div", { role: "listitem" }, React.createElement("strong", null, "Download"), React.createElement("span", null, "Save the generated result locally.")),
    ),
    React.createElement("div", { className: "info-grid" },
      React.createElement("article", null, React.createElement("span", { className: "info-number" }, "01"), React.createElement("h2", null, "No product account"), React.createElement("p", null, "The curated workspace does not require registration or an application account to process a document.")),
      React.createElement("article", null, React.createElement("span", { className: "info-number" }, "02"), React.createElement("h2", null, "Browser-local state"), React.createElement("p", null, "Document Desk stores only product navigation state, such as the last opened tool, in browser storage. Individual recovered tools may keep their own browser-local history or settings.")),
      React.createElement("article", null, React.createElement("span", { className: "info-number" }, "03"), React.createElement("h2", null, "You control cleanup"), React.createElement("p", null, "Downloaded results remain wherever your browser saves them. Browser-local state can be removed by clearing this site’s data.")),
    ),
  );
}
