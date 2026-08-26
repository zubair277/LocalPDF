import { r as React } from "/assets/react-vendor-Bc7KCos-.js";

export class RecoveredErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, details) {
    console.error("Recovered tool runtime error", error, details);
    this.props.onError?.(error);
  }

  componentDidUpdate(previousProps) {
    if (previousProps.resetKey !== this.props.resetKey && this.state.error) this.setState({ error: null });
  }

  render() {
    if (!this.state.error) return this.props.children;
    return React.createElement("div", { className: "state state-error", role: "alert" },
      React.createElement("strong", null, "This workspace stopped unexpectedly."),
      React.createElement("p", null, "Your other tools and the Document Desk shell are still available."),
      React.createElement("div", { className: "state-actions" },
        React.createElement("button", { className: "button-primary", type: "button", onClick: this.props.onRetry }, "Retry"),
        React.createElement("button", { className: "button-secondary", type: "button", onClick: this.props.onBack }, "Back to tools"),
      ),
    );
  }
}
