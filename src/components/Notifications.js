import { r as React } from "/assets/react-vendor-Bc7KCos-.js";

const severityLabels = { success: "Success", error: "Error", warning: "Warning", info: "Information" };

export function Notifications({ items, onDismiss }) {
  return React.createElement("section", {
    className: "notifications",
    "aria-label": "Notifications",
    "aria-live": "polite",
    "aria-relevant": "additions removals",
  }, items.map((item) => React.createElement("div", {
    key: item.id,
    className: `notification notification-${item.severity}`,
    role: item.severity === "error" ? "alert" : "status",
  },
  React.createElement("span", { className: "notification-dot", "aria-hidden": "true" }),
  React.createElement("div", { className: "notification-copy" },
    React.createElement("strong", null, severityLabels[item.severity]),
    React.createElement("span", null, item.message),
  ),
  React.createElement("button", { type: "button", onClick: () => onDismiss(item.id), "aria-label": "Dismiss notification" }, "×"))));
}
