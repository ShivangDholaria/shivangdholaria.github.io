import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

// Animations run only under html.motion: never for visitors who ask for reduced motion,
// and never without IntersectionObserver. Without the class the page renders fully at rest.
if (
  typeof window !== "undefined" &&
  "IntersectionObserver" in window &&
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches
) {
  document.documentElement.classList.add("motion");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
