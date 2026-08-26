import { toolById, toolByPath } from "/assets/new-tools.js";

export function resolveRoute(pathname = window.location.pathname) {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (normalized === "/") return { kind: "home", key: "home", title: "Document Desk — Browser document tools" };
  if (normalized === "/about") return { kind: "about", key: "about", title: "About & privacy — Document Desk" };
  if (normalized === "/privacy") return { kind: "privacy", key: "privacy", title: "Privacy — Document Desk" };
  const directId = normalized.match(/^\/tool\/([^/]+)$/)?.[1];
  if (directId && toolById[directId]) return { kind: "tool", key: `tool:${directId}`, tool: toolById[directId], title: `${toolById[directId].title} — Document Desk`, canonicalPath: toolById[directId].path };
  const tool = toolByPath[normalized];
  if (tool) return { kind: "tool", key: `tool:${tool.id}`, tool, title: `${tool.title} — Document Desk` };
  return { kind: "not-found", key: `not-found:${normalized}`, title: "Page not found — Document Desk" };
}

export function routeFor(destination) {
  if (destination === "home") return "/";
  if (destination === "about") return "/about";
  if (destination === "privacy") return "/privacy";
  return toolById[destination]?.path || null;
}
