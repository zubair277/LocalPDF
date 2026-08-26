import { r as React } from "/assets/react-vendor-Bc7KCos-.js";

export function WorkspaceFrame({ tool, children }) {
  return React.createElement("div", { className: "workspace-frame", "data-tool-id": tool.id },
    React.createElement("div", { className: "workspace-toolbar" }, React.createElement("div", null, React.createElement("span", { className: "workspace-kicker" }, "Document Desk / workspace"), React.createElement("h1", null, tool.title)), React.createElement("span", { className: "local-badge" }, "Local processing")),
    React.createElement("p", { className: "workspace-description" }, tool.description),
    React.createElement("div", { className: "workspace-surface", "aria-label": `${tool.title} workspace` }, children),
    React.createElement("div", { className: "workspace-footnote" }, React.createElement("span", null, "Files are processed in this browser."), React.createElement("span", null, "Large files may take a moment.")),
  );
}
