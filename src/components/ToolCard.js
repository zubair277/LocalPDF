import { r as React } from "/assets/react-vendor-Bc7KCos-.js";

export function ToolCard({ tool, active, onSelect }) {
  return React.createElement("button", {
    className: `tool-card${active ? " active" : ""}`,
    onClick: () => onSelect(tool.id),
  },
    React.createElement("span", { className: "tool-icon", "aria-hidden": "true" }, tool.glyph),
    React.createElement("span", { className: "tool-copy" },
      React.createElement("strong", null, tool.title),
      React.createElement("small", null, tool.description),
      React.createElement("em", null, tool.category),
    ),
  );
}
