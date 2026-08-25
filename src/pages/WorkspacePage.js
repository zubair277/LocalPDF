import { r as React } from "/assets/react-vendor-Bc7KCos-.js";
import { toolById } from "/assets/new-tools.js";
import { RecoveredTool } from "/assets/recovered-tools.js";
import { WorkspaceFrame } from "/assets/WorkspaceComponents.js";

export function WorkspacePage({ id, onNotice }) {
  const tool = toolById[id];
  return React.createElement("section", { className: "tool-view" }, React.createElement(WorkspaceFrame, { tool }, React.createElement(RecoveredTool, { id, onNotice })));
}
