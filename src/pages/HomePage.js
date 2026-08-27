import { r as React } from "/assets/react-vendor-Bc7KCos-.js";
import { categories, toolById, toolsInCategory } from "/assets/new-tools.js";
import { ToolCard } from "/assets/ToolCard.js";

const quickTools = [toolById.merge, toolById.compress, toolById.pdftojpg];

export function HomePage({ onSelect, lastTool }) {
  return React.createElement(React.Fragment, null,
    React.createElement("section", { className: "hero-layout" },
      React.createElement("div", { className: "hero" },
        React.createElement("p", { className: "eyebrow" }, "A practical PDF workbench"),
        React.createElement("h1", null, "PDF tools that stay out of your way."),
        React.createElement("p", null, "Merge a contract, split a report, pull out text, or convert a file. Pick the job and work directly in your browser."),
        React.createElement("div", { className: "hero-actions" },
          React.createElement("button", { className: "button-primary hero-primary", type: "button", onClick: () => onSelect("merge") }, "Open Merge PDF", React.createElement("span", { "aria-hidden": "true" }, "→")),
          React.createElement("a", { className: "button-secondary", href: "#tool-catalog" }, "See all 22 tools"),
        ),
      ),
      React.createElement("aside", { className: "quick-start", "aria-label": "Quick start tools" },
        React.createElement("div", { className: "quick-start-heading" }, React.createElement("span", null, "Quick start"), React.createElement("small", null, "Most used")),
        quickTools.map((tool) => React.createElement("button", { key: tool.id, type: "button", onClick: () => onSelect(tool.id) },
          React.createElement("span", { className: "quick-glyph", "aria-hidden": "true" }, tool.glyph),
          React.createElement("span", null, React.createElement("strong", null, tool.title), React.createElement("small", null, tool.description)),
          React.createElement("span", { "aria-hidden": "true" }, "↗"),
        )),
        React.createElement("p", null, "Files are handled by the selected tool in this browser."),
      ),
    ),
    React.createElement("div", { className: "hero-rule", "aria-label": "Product highlights" }, React.createElement("span", null, "22 focused tools"), React.createElement("span", null, "No account required"), React.createElement("span", null, "Local processing for curated tools")),
    lastTool && React.createElement("button", { className: "continue-card", type: "button", onClick: () => onSelect(lastTool.id) },
      React.createElement("span", { className: "continue-glyph", "aria-hidden": "true" }, lastTool.glyph),
      React.createElement("span", null, React.createElement("small", null, "Continue where you left off"), React.createElement("strong", null, lastTool.title)),
      React.createElement("span", { "aria-hidden": "true" }, "→"),
    ),
    React.createElement("div", { id: "tool-catalog", className: "catalog-heading" }, React.createElement("p", { className: "eyebrow" }, "Tool catalog"), React.createElement("h2", null, "Choose the job. Get it done."), React.createElement("p", null, "Twenty-two focused tools, grouped around the way document work actually happens.")),
    categories.map((category) => React.createElement("section", { className: "tool-category", key: category, "aria-labelledby": `home-${category.replaceAll(" ", "-")}` },
      React.createElement("div", { className: "section-heading" }, React.createElement("h2", { id: `home-${category.replaceAll(" ", "-")}` }, category), React.createElement("span", null, `${toolsInCategory(category).length} tools`)),
      React.createElement("div", { className: "tool-grid" }, toolsInCategory(category).map((tool) => React.createElement(ToolCard, { key: tool.id, tool, onSelect }))),
    )),
  );
}
