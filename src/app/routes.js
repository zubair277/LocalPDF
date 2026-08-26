import { toolById, toolByPath } from "/assets/new-tools.js";

export function resolveRoute(pathname = window.location.pathname) {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (normalized === "/") return { kind: "home", key: "home", title: "Document Desk — Browser document tools" };
  if (normalized === "/about") return { kind: "about", key: "about", title: "About & privacy — Document Desk" };
  const tool = toolByPath[normalized];
  if (tool) return { kind: "tool", key: `tool:${tool.id}`, tool, title: `${tool.title} — Document Desk` };
  return { kind: "not-found", key: `not-found:${normalized}`, title: "Page not found — Document Desk" };
}

export function routeFor(destination) {
  if (destination === "home") return "/";
  if (destination === "about") return "/about";
  return toolById[destination]?.path || null;
}
