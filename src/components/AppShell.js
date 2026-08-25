import React from "/assets/react-vendor-Bc7KCos-.js";
import { tools, toolById } from "/assets/new-tools.js";
import { HomePage } from "/assets/HomePage.js";
import { WorkspacePage } from "/assets/WorkspacePage.js";
import { AboutPage } from "/assets/AboutPage.js";

export function AppShell() {
  const [selected, setSelected] = React.useState("dashboard");
  const [notice, setNotice] = React.useState(null);
  const groups = [...new Set(tools.map((tool) => tool.category))];
  const choose = (id) => { setSelected(id); setNotice(null); if (id !== "about") localStorage.setItem("document-desk_last_tool", id); history.replaceState({}, "", id === "dashboard" ? "/" : id === "about" ? "/about" : `/${toolById[id].path}`); };
  React.useEffect(() => {
    const path = location.pathname.replace(/^\//, "");
    const match = tools.find((tool) => tool.path === path);
    if (location.pathname === "/about") setSelected("about"); else if (match) setSelected(match.id);
  }, []);
  return React.createElement("div", { className: "product-shell" },
    React.createElement("header", { className: "topbar" },
      React.createElement("button", { className: "brand", onClick: () => choose("dashboard") }, React.createElement("span", { className: "brand-mark" }, "D"), "Document Desk"),
      React.createElement("span", { className: "tagline" }, "A quiet workspace for files"),
    ),
    React.createElement("div", { className: "body-grid" },
      React.createElement("aside", { className: "sidebar" },
        React.createElement("p", { className: "eyebrow" }, "Workspace"),
        React.createElement("button", { className: `nav-home${selected === "dashboard" ? " active" : ""}`, onClick: () => choose("dashboard") }, "Overview"),
        React.createElement("button", { className: `nav-home${selected === "about" ? " active" : ""}`, onClick: () => choose("about") }, "About & privacy"),
        groups.map((group) => React.createElement("div", { key: group, className: "nav-group" }, React.createElement("p", { className: "eyebrow tools-label" }, group), tools.filter((tool) => tool.category === group).map((tool) => React.createElement("button", { key: tool.id, className: `nav-item${selected === tool.id ? " active" : ""}`, onClick: () => choose(tool.id) }, React.createElement("span", { className: "nav-glyph" }, tool.icon), tool.title)))),
      ),
      React.createElement("main", { className: "workspace" },
        selected === "dashboard" ? React.createElement(HomePage, { onSelect: choose }) : selected === "about" ? React.createElement(React.Fragment, null, React.createElement("button", { className: "back-link", onClick: () => choose("dashboard") }, "← Back to overview"), React.createElement(AboutPage)) : React.createElement(React.Fragment, null, React.createElement("button", { className: "back-link", onClick: () => choose("dashboard") }, "← Back to overview"), React.createElement(WorkspacePage, { id: selected, onNotice: setNotice })),
        notice && React.createElement("div", { className: "notice" }, String(notice.message || notice)),
      ),
    ),
  );
}
