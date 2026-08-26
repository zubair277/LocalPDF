import { r as React } from "/assets/react-vendor-Bc7KCos-.js";
import { toolById } from "/assets/new-tools.js";
import { RecoveredTool } from "/assets/recovered-tools.js";
import { WorkspaceFrame } from "/assets/WorkspaceComponents.js";
import { RecoveredErrorBoundary } from "/assets/RecoveredErrorBoundary.js";

export function WorkspacePage({ id, onNotice, onDownload, onBack }) {
  const tool = toolById[id];
  const [boundaryAttempt, setBoundaryAttempt] = React.useState(0);
  React.useEffect(() => setBoundaryAttempt(0), [id]);
  const resetKey = `${id}:${boundaryAttempt}`;
  return React.createElement("section", { className: "tool-view" },
    React.createElement(WorkspaceFrame, { tool },
      React.createElement(RecoveredErrorBoundary, {
        key: resetKey,
        resetKey,
        onRetry: () => setBoundaryAttempt((value) => value + 1),
        onBack,
        onError: () => onNotice("The tool encountered an unexpected error.", "error"),
      }, React.createElement(RecoveredTool, { key: resetKey, id, onNotice, onDownload, onBack })),
    ),
  );
}
