// If any page crashes while rendering, show what happened and a way out
// instead of an empty window. Kept plain on purpose, so this screen can't
// crash itself.
import { Component, type ErrorInfo, type ReactNode } from "react";

type State = { error: Error | null };

export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Dash crashed:", error, info.componentStack);
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;
    return (
      <div className="flex h-full w-full items-center justify-center bg-[#0b0d10] p-6 font-['Inter']">
        <div className="flex w-full max-w-[520px] flex-col items-start gap-4 rounded-xl border border-solid border-[#7f1d1d] bg-[#121519] p-6">
          <span className="text-[18px] font-[700] leading-[24px] text-[#ffffff]">Dash ran into a problem</span>
          <span className="text-[14px] font-[400] leading-[20px] text-[#c4c9d1]">
            Your servers are fine: this only affects this window. Reload to carry on. If it keeps happening,
            send the message below to the Tinker team.
          </span>
          <pre className="max-h-[200px] w-full overflow-auto whitespace-pre-wrap break-words rounded-lg border border-solid border-[#2a3038] bg-[#0b0d10] p-3 font-['Obel_Mono'] text-[12px] leading-[18px] text-[#fca5a5]">
            {error.message || String(error)}
          </pre>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="h-9 cursor-pointer rounded-lg border-none bg-[#22c55e] px-4 text-[14px] font-[600] text-[#052e12] hover:bg-[#16a34a]"
              onClick={() => window.location.reload()}
            >
              Reload Dash
            </button>
            <button
              type="button"
              className="h-9 cursor-pointer rounded-lg border border-solid border-[#2a3038] bg-[#1a1e23] px-4 text-[14px] font-[600] text-[#ffffff] hover:bg-[#232830]"
              onClick={() => this.setState({ error: null })}
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }
}
