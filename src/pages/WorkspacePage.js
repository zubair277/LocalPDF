import React from "/assets/react-vendor-Bc7KCos-.js";
import { toolById } from "/assets/new-tools.js";
import { RecoveredTool } from "/assets/recovered-tools.js";

export function WorkspacePage({ id, onNotice }) {
  const tool = toolById[id];
  return React.createElement("section", { className: "tool-view" }, React.createElement("div", { className: "tool-heading" }, React.createElement("p", { className: "eyebrow" }, "Workspace"), React.createElement("h1", null, tool.title), React.createElement("p", null, tool.description)), React.createElement(RecoveredTool, { id, onNotice }));
}
