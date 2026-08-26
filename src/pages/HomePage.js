import { r as React } from "/assets/react-vendor-Bc7KCos-.js";
import { categories, toolsInCategory } from "/assets/new-tools.js";
import { ToolCard } from "/assets/ToolCard.js";

export function HomePage({ onSelect, lastTool }) {
  return React.createElement(React.Fragment, null,
    React.createElement("section", { className: "hero" },
      React.createElement("p", { className: "eyebrow" }, "Your browser PDF workspace"),
      React.createElement("h1", null, "Make every document feel lighter."),
      React.createElement("p", null, "Manage, protect, extract, and convert PDFs in one focused workspace. Choose a tool, work in your browser, and download the result."),
      React.createElement("div", { className: "hero-actions" },
        React.createElement("button", { className: "button-primary hero-primary", type: "button", onClick: () => onSelect("merge") }, "Start with Merge PDF", React.createElement("span", { "aria-hidden": "true" }, "→")),
        React.createElement("a", { className: "button-secondary", href: "#tool-catalog" }, "Browse all tools"),
      ),
    ),
    React.createElement("div", { className: "hero-rule", "aria-label": "Product highlights" }, React.createElement("span", null, "22 focused tools"), React.createElement("span", null, "No account required"), React.createElement("span", null, "Local processing for curated tools")),
    lastTool && React.createElement("button", { className: "continue-card", type: "button", onClick: () => onSelect(lastTool.id) },
      React.createElement("span", { className: "continue-glyph", "aria-hidden": "true" }, lastTool.glyph),
      React.createElement("span", null, React.createElement("small", null, "Continue where you left off"), React.createElement("strong", null, lastTool.title)),
      React.createElement("span", { "aria-hidden": "true" }, "→"),
    ),
    React.createElement("div", { id: "tool-catalog", className: "catalog-heading" }, React.createElement("p", { className: "eyebrow" }, "Tool catalog"), React.createElement("h2", null, "Everything on your desk."), React.createElement("p", null, "Four clear categories keep common tasks easy to find.")),
    categories.map((category) => React.createElement("section", { className: "tool-category", key: category, "aria-labelledby": `home-${category.replaceAll(" ", "-")}` },
      React.createElement("div", { className: "section-heading" }, React.createElement("h2", { id: `home-${category.replaceAll(" ", "-")}` }, category), React.createElement("span", null, `${toolsInCategory(category).length} tools`)),
      React.createElement("div", { className: "tool-grid" }, toolsInCategory(category).map((tool) => React.createElement(ToolCard, { key: tool.id, tool, onSelect }))),
    )),
  );
}
