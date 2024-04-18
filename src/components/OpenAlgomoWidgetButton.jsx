import React from "react";

export function OpenAlgomoWidgetButton({ children }) {
  return (
    <button
      className="link-button"
      onClick={() =>
        window.postMessage({
          type: "widget:show",
          widgetId: "64b26869eccc94a185db7f18",
        })
      }
    >
      {children}
    </button>
  );
}
