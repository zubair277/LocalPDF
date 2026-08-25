import React from "/assets/react-vendor-Bc7KCos-.js";

export function WorkspaceFrame({ tool, children }) {
  return React.createElement("div", { className: "workspace-frame" },
    React.createElement("div", { className: "workspace-toolbar" }, React.createElement("div", null, React.createElement("span", { className: "workspace-kicker" }, "Document Desk / workspace"), React.createElement("h1", null, tool.title)), React.createElement("span", { className: "local-badge" }, "Local processing")),
    React.createElement("p", { className: "workspace-description" }, tool.description),
    React.createElement("div", { className: "workspace-surface" }, children),
  );
}

export function FileDropZone({ title = "Drop a file here", hint = "or choose from your device" }) {
  return React.createElement("div", { className: "drop-zone", role: "status" }, React.createElement("span", { className: "drop-icon" }, "↑"), React.createElement("strong", null, title), React.createElement("small", null, hint));
}
export function FileList({ files = [] }) { return React.createElement("ul", { className: "file-list" }, files.map((file) => React.createElement("li", { key: file.name || file }, file.name || file))); }
export function ProcessingState() { return React.createElement("div", { className: "state processing" }, "Processing document…"); }
export function SuccessState({ children = "Your document is ready." }) { return React.createElement("div", { className: "state success" }, children); }
export function ErrorState({ children = "Something went wrong." }) { return React.createElement("div", { className: "state error" }, children); }
