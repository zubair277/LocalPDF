import { r as React } from "/assets/react-vendor-Bc7KCos-.js";
import { categories, toolsInCategory } from "/assets/new-tools.js";
import { ToolCard } from "/assets/ToolCard.js";

export function HomePage({ onSelect, lastTool }) {
  return React.createElement(React.Fragment, null,
    React.createElement("section", { className: "hero" }, React.createElement("p", { className: "eyebrow" }, "Document Desk · private workspace"), React.createElement("h1", null, "Make every document feel lighter."), React.createElement("p", null, "A focused toolkit for everyday PDF tasks. Work locally, keep control, and move on with your day.")),
    React.createElement("div", { className: "hero-rule" }, React.createElement("span", null, "22 focused tools"), React.createElement("span", null, "No account required"), React.createElement("span", null, "Built for the browser")),
    lastTool && React.createElement("button", { className: "continue-card", type: "button", onClick: () => onSelect(lastTool.id) },
      React.createElement("span", { className: "continue-glyph", "aria-hidden": "true" }, lastTool.glyph),
      React.createElement("span", null, React.createElement("small", null, "Continue where you left off"), React.createElement("strong", null, lastTool.title)),
      React.createElement("span", { "aria-hidden": "true" }, "→"),
    ),
    categories.map((category) => React.createElement("section", { className: "tool-category", key: category },
      React.createElement("div", { className: "section-heading" }, React.createElement("p", { className: "eyebrow" }, category), React.createElement("span", null, `${toolsInCategory(category).length} tools`)),
      React.createElement("div", { className: "tool-grid" }, toolsInCategory(category).map((tool) => React.createElement(ToolCard, { key: tool.id, tool, onSelect }))),
    )),
  );
}
