import { r as React } from "/assets/react-vendor-Bc7KCos-.js";
import { categories, toolById, toolsInCategory } from "/assets/new-tools.js";
import { resolveRoute, routeFor } from "/assets/routes.js";
import { HomePage } from "/assets/HomePage.js";
import { WorkspacePage } from "/assets/WorkspacePage.js";
import { AboutPage } from "/assets/AboutPage.js";
import { Notifications } from "/assets/Notifications.js";
import { DownloadDialog } from "/assets/DownloadDialog.js";

const validSeverities = new Set(["success", "error", "warning", "info"]);

function storedTool() {
  try {
    return toolById[localStorage.getItem("document-desk_last_tool")] || null;
  } catch {
    return null;
  }
}

function ToolLinks({ route, query, onNavigate, mobile = false }) {
  const needle = query.trim().toLowerCase();
  return categories.map((category) => {
    const matches = toolsInCategory(category).filter((tool) => !needle || `${tool.title} ${tool.description}`.toLowerCase().includes(needle));
    if (!matches.length) return null;
    const links = matches.map((tool) => React.createElement("button", {
      key: tool.id,
      type: "button",
      className: `nav-item${route.tool?.id === tool.id ? " active" : ""}`,
      onClick: () => onNavigate(tool.id),
      "aria-current": route.tool?.id === tool.id ? "page" : undefined,
    }, React.createElement("span", { className: "nav-glyph", "aria-hidden": "true" }, tool.glyph), tool.title));
    if (mobile) return React.createElement("details", { key: category, className: "mobile-nav-group", open: route.tool?.category === category || Boolean(needle) },
      React.createElement("summary", null, category),
      React.createElement("div", { className: "mobile-nav-links" }, links),
    );
    return React.createElement("section", { key: category, className: "nav-group", "aria-labelledby": `nav-${category.replaceAll(" ", "-")}` },
      React.createElement("h2", { id: `nav-${category.replaceAll(" ", "-")}`, className: "eyebrow tools-label" }, category),
      links,
    );
  });
}

export function AppShell() {
  const [route, setRoute] = React.useState(() => resolveRoute());
  const [lastTool, setLastTool] = React.useState(storedTool);
  const [query, setQuery] = React.useState("");
  const [notifications, setNotifications] = React.useState([]);
  const [download, setDownload] = React.useState(null);
  const notificationId = React.useRef(0);
  const mainRef = React.useRef(null);

  const dismissNotification = React.useCallback((id) => setNotifications((items) => items.filter((item) => item.id !== id)), []);
  const notify = React.useCallback((message, severity = "success") => {
    const normalizedSeverity = validSeverities.has(severity) ? severity : "info";
    const id = ++notificationId.current;
    const text = String(message?.message || message || "Notification");
    setNotifications((items) => [...items, { id, message: text, severity: normalizedSeverity }]);
    setTimeout(() => dismissNotification(id), normalizedSeverity === "error" ? 7000 : 5000);
  }, [dismissNotification]);

  const navigate = React.useCallback((destination, options = {}) => {
    const path = routeFor(destination);
    if (!path) return;
    if (options.replace) history.replaceState({}, "", path);
    else history.pushState({}, "", path);
    setRoute(resolveRoute(path));
    setQuery("");
  }, []);

  React.useEffect(() => {
    const applyLocation = () => {
      const canonical = location.pathname.length > 1 ? location.pathname.replace(/\/+$/, "") : location.pathname;
      if (canonical !== location.pathname) history.replaceState({}, "", canonical);
      setRoute(resolveRoute(canonical));
      setQuery("");
    };
    addEventListener("popstate", applyLocation);
    applyLocation();
    return () => removeEventListener("popstate", applyLocation);
  }, []);

  React.useEffect(() => {
    document.title = route.title;
    if (route.kind === "tool") {
      try { localStorage.setItem("document-desk_last_tool", route.tool.id); } catch {}
      setLastTool(route.tool);
    }
    requestAnimationFrame(() => mainRef.current?.focus({ preventScroll: true }));
  }, [route.key]);

  const handleDownload = React.useCallback((name, size, bytes) => {
    if (name) setDownload({ name: String(name), size: Number(size), bytes: bytes || null });
  }, []);

  const page = route.kind === "home"
    ? React.createElement(HomePage, { onSelect: navigate, lastTool })
    : route.kind === "about"
      ? React.createElement(AboutPage)
      : route.kind === "tool"
        ? React.createElement(WorkspacePage, { key: route.tool.id, id: route.tool.id, onNotice: notify, onDownload: handleDownload, onBack: () => navigate("home") })
        : React.createElement("section", { className: "not-found" },
          React.createElement("p", { className: "eyebrow" }, "404 · Not found"),
          React.createElement("h1", null, "That page is not on this desk."),
          React.createElement("p", null, "The address may be incorrect, or the tool is not part of this collection."),
          React.createElement("button", { className: "button-primary", type: "button", onClick: () => navigate("home") }, "Back to tools"),
        );

  return React.createElement("div", { className: "product-shell" },
    React.createElement("header", { className: "topbar" },
      React.createElement("button", { type: "button", className: "brand", onClick: () => navigate("home"), "aria-label": "Document Desk home" }, React.createElement("span", { className: "brand-mark", "aria-hidden": "true" }, "D"), "Document Desk"),
      React.createElement("span", { className: "tagline" }, "A quiet workspace for files"),
    ),
    React.createElement("div", { className: "body-grid" },
      React.createElement("aside", { className: "sidebar", "aria-label": "Document tools" },
        React.createElement("nav", { className: "primary-nav" },
          React.createElement("p", { className: "eyebrow" }, "Workspace"),
          React.createElement("button", { type: "button", className: `nav-home${route.kind === "home" ? " active" : ""}`, onClick: () => navigate("home"), "aria-current": route.kind === "home" ? "page" : undefined }, "Overview"),
          React.createElement("button", { type: "button", className: `nav-home${route.kind === "about" ? " active" : ""}`, onClick: () => navigate("about"), "aria-current": route.kind === "about" ? "page" : undefined }, "About & privacy"),
          React.createElement("label", { className: "tool-search" }, React.createElement("span", null, "Find a tool"), React.createElement("input", { type: "search", value: query, onChange: (event) => setQuery(event.target.value), placeholder: "Search 22 tools" })),
          React.createElement("div", { className: "desktop-tool-nav" }, React.createElement(ToolLinks, { route, query, onNavigate: navigate })),
          React.createElement("div", { className: "mobile-tool-nav" }, React.createElement(ToolLinks, { route, query, onNavigate: navigate, mobile: true })),
        ),
      ),
      React.createElement("main", { className: "workspace", ref: mainRef, tabIndex: -1 },
        route.kind !== "home" && route.kind !== "not-found" && React.createElement("button", { className: "back-link", type: "button", onClick: () => navigate("home") }, "← Back to overview"),
        page,
      ),
    ),
    React.createElement(Notifications, { items: notifications, onDismiss: dismissNotification }),
    download && React.createElement(DownloadDialog, { download, onClose: () => setDownload(null) }),
  );
}
