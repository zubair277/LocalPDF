import { r as React } from "/assets/react-vendor-Bc7KCos-.js";
import { categories, tools, toolById, toolsInCategory } from "/assets/new-tools.js";
import { resolveRoute, routeFor } from "/assets/routes.js";
import { HomePage } from "/assets/HomePage.js";
import { WorkspacePage } from "/assets/WorkspacePage.js";
import { AboutPage } from "/assets/AboutPage.js";
import { PrivacyPage } from "/assets/PrivacyPage.js";
import { Notifications } from "/assets/Notifications.js";
import { DownloadDialog } from "/assets/DownloadDialog.js";

const validSeverities = new Set(["success", "error", "warning", "info"]);

function matchesTool(tool, query) {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return true;
  const words = `${tool.title} ${tool.description} ${tool.category}`.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  return terms.every((term) => words.some((word) => word.startsWith(term)));
}

function storedTool() {
  try {
    return toolById[localStorage.getItem("document-desk_last_tool")] || null;
  } catch {
    return null;
  }
}

function ToolLinks({ route, query, onNavigate, mobile = false }) {
  const groups = categories.map((category) => {
    const matches = toolsInCategory(category).filter((tool) => matchesTool(tool, query));
    if (!matches.length) return null;
    const links = matches.map((tool) => React.createElement("button", {
      key: tool.id,
      type: "button",
      className: `nav-item${route.tool?.id === tool.id ? " active" : ""}`,
      onClick: () => onNavigate(tool.id),
      "aria-current": route.tool?.id === tool.id ? "page" : undefined,
    }, React.createElement("span", { className: "nav-glyph", "aria-hidden": "true" }, tool.glyph), tool.title));
    if (mobile) return React.createElement("details", { key: category, className: "mobile-nav-group", open: route.tool?.category === category || Boolean(query.trim()) },
      React.createElement("summary", null, category),
      React.createElement("div", { className: "mobile-nav-links" }, links),
    );
    return React.createElement("section", { key: category, className: "nav-group", "aria-labelledby": `nav-${category.replaceAll(" ", "-")}` },
      React.createElement("h2", { id: `nav-${category.replaceAll(" ", "-")}`, className: "eyebrow tools-label" }, category),
      links,
    );
  }).filter(Boolean);
  if (!groups.length) return React.createElement("p", { className: "nav-empty", role: "status" }, "No tools match your search.");
  return groups;
}

export function AppShell() {
  const [route, setRoute] = React.useState(() => resolveRoute());
  const [lastTool, setLastTool] = React.useState(storedTool);
  const [query, setQuery] = React.useState("");
  const [notifications, setNotifications] = React.useState([]);
  const [download, setDownload] = React.useState(null);
  const [installPrompt, setInstallPrompt] = React.useState(null);
  const notificationId = React.useRef(0);
  const mainRef = React.useRef(null);
  const hasCompletedInitialRoute = React.useRef(false);
  const visibleToolCount = React.useMemo(() => {
    return tools.filter((tool) => matchesTool(tool, query)).length;
  }, [query]);

  const dismissNotification = React.useCallback((id) => setNotifications((items) => items.filter((item) => item.id !== id)), []);
  const notify = React.useCallback((message, severity = "success") => {
    const normalizedSeverity = validSeverities.has(severity) ? severity : "info";
    const id = ++notificationId.current;
    const text = String(message?.message || message || "Notification");
    setNotifications((items) => [...items, { id, message: text, severity: normalizedSeverity }]);
    setTimeout(() => dismissNotification(id), normalizedSeverity === "error" ? 7000 : 5000);
  }, [dismissNotification]);

  React.useEffect(() => {
    const captureInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };
    addEventListener("beforeinstallprompt", captureInstallPrompt);
    return () => removeEventListener("beforeinstallprompt", captureInstallPrompt);
  }, []);

  const installApp = React.useCallback(async () => {
    if (matchMedia("(display-mode: standalone)").matches) {
      notify("Document Desk is already installed on this device.", "info");
      return;
    }
    if (!installPrompt) {
      notify("Use your browser’s Install app or Add to Home Screen option to download Document Desk.", "info");
      return;
    }
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    if (choice.outcome === "accepted") notify("Document Desk is being installed.", "success");
    setInstallPrompt(null);
  }, [installPrompt, notify]);

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
      const nextRoute = resolveRoute(canonical);
      if (nextRoute.canonicalPath && nextRoute.canonicalPath !== canonical) history.replaceState({}, "", nextRoute.canonicalPath);
      setRoute(nextRoute);
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
    if (hasCompletedInitialRoute.current) requestAnimationFrame(() => mainRef.current?.focus({ preventScroll: true }));
    else hasCompletedInitialRoute.current = true;
  }, [route.key]);

  const handleDownload = React.useCallback((name, size, bytes) => {
    if (name) setDownload({ name: String(name), size: Number(size), bytes: bytes || null });
  }, []);

  const page = route.kind === "home"
    ? React.createElement(HomePage, { onSelect: navigate, lastTool })
    : route.kind === "about"
      ? React.createElement(AboutPage, { onPrivacy: () => navigate("privacy") })
      : route.kind === "privacy"
        ? React.createElement(PrivacyPage)
      : route.kind === "tool"
        ? React.createElement(WorkspacePage, { key: route.tool.id, id: route.tool.id, onNotice: notify, onDownload: handleDownload, onBack: () => navigate("home") })
        : React.createElement("section", { className: "not-found" },
          React.createElement("p", { className: "eyebrow" }, "404 · Not found"),
          React.createElement("h1", null, "That page is not on this desk."),
          React.createElement("p", null, "The address may be incorrect, or the tool is not part of this collection."),
          React.createElement("button", { className: "button-primary", type: "button", onClick: () => navigate("home") }, "Back to tools"),
        );

  return React.createElement("div", { className: "product-shell" },
    React.createElement("a", { className: "skip-link", href: "#main-content" }, "Skip to main content"),
    React.createElement("header", { className: "topbar" },
      React.createElement("button", { type: "button", className: "brand", onClick: () => navigate("home"), "aria-label": "Document Desk home" }, React.createElement("span", { className: "brand-mark" }, React.createElement("img", { src: "/fevicon.png", alt: "" })), React.createElement("span", null, "Document Desk")),
      React.createElement("span", { className: "tagline" }, "Browser PDF workspace"),
      React.createElement("div", { className: "topbar-actions" },
        React.createElement("span", { className: "header-status" }, React.createElement("span", { "aria-hidden": "true" }), "22 local-first tools"),
        React.createElement("button", { className: "install-cta", type: "button", onClick: installApp }, React.createElement("span", { "aria-hidden": "true" }, "↓"), "Download the app"),
      ),
    ),
    React.createElement("div", { className: "body-grid" },
      React.createElement("aside", { className: "sidebar", "aria-label": "Document tools" },
        React.createElement("nav", { className: "primary-nav" },
          React.createElement("p", { className: "eyebrow" }, "Workspace"),
          React.createElement("button", { type: "button", className: `nav-home${route.kind === "home" ? " active" : ""}`, onClick: () => navigate("home"), "aria-current": route.kind === "home" ? "page" : undefined }, "Overview"),
          React.createElement("button", { type: "button", className: `nav-home${route.kind === "about" ? " active" : ""}`, onClick: () => navigate("about"), "aria-current": route.kind === "about" ? "page" : undefined }, "About Document Desk"),
          React.createElement("button", { type: "button", className: `nav-home nav-secondary${route.kind === "privacy" ? " active" : ""}`, onClick: () => navigate("privacy"), "aria-current": route.kind === "privacy" ? "page" : undefined }, "Privacy details"),
          React.createElement("div", { className: "tool-search" },
            React.createElement("label", { htmlFor: "tool-search-input" }, "Find a tool"),
            React.createElement("div", { className: "search-control" },
              React.createElement("input", { id: "tool-search-input", type: "search", value: query, onChange: (event) => setQuery(event.target.value), placeholder: "Search 22 tools", autoComplete: "off" }),
              query && React.createElement("button", { type: "button", onClick: () => setQuery(""), "aria-label": "Clear tool search" }, "×"),
            ),
            React.createElement("span", { className: "search-status", "aria-live": "polite" }, query ? `${visibleToolCount} tool${visibleToolCount === 1 ? "" : "s"} found` : ""),
          ),
          React.createElement("div", { className: "desktop-tool-nav" }, React.createElement(ToolLinks, { route, query, onNavigate: navigate })),
          React.createElement("div", { className: "mobile-tool-nav" }, React.createElement(ToolLinks, { route, query, onNavigate: navigate, mobile: true })),
          React.createElement("div", { className: "sidebar-foot" }, React.createElement("span", { "aria-hidden": "true" }, "◌"), React.createElement("span", null, "Curated tools process files in your browser")),
        ),
      ),
      React.createElement("main", { id: "main-content", className: "workspace", ref: mainRef, tabIndex: -1 },
        route.kind !== "home" && route.kind !== "not-found" && React.createElement("button", { className: "back-link", type: "button", onClick: () => navigate("home") }, "← Back to overview"),
        page,
      ),
    ),
    React.createElement(Notifications, { items: notifications, onDismiss: dismissNotification }),
    download && React.createElement(DownloadDialog, { download, onClose: () => setDownload(null) }),
  );
}
