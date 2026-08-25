import { r as React } from "/assets/react-vendor-Bc7KCos-.js";
import { tools } from "/assets/new-tools.js";
import { ToolCard } from "/assets/ToolCard.js";

export function HomePage({ onSelect }) {
  return React.createElement(React.Fragment, null,
    React.createElement("section", { className: "hero" }, React.createElement("p", { className: "eyebrow" }, "Document Desk · private workspace"), React.createElement("h1", null, "Make every document feel lighter."), React.createElement("p", null, "A focused toolkit for everyday PDF tasks. Work locally, keep control, and move on with your day.")),
    React.createElement("div", { className: "hero-rule" }, React.createElement("span", null, "22 focused tools"), React.createElement("span", null, "No account required"), React.createElement("span", null, "Built for the browser")),
    React.createElement("section", { className: "tool-grid" }, tools.map((tool) => React.createElement(ToolCard, { key: tool.id, tool, onSelect }))),
  );
}
