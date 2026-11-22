import { useState } from "react";

import { Download } from "./Icons";
import { downloadResume, preloadResume } from "../resume/download";

// A button that generates the resume PDF from the site's data and downloads it.
const ResumeButton = ({ className = "", label = "Resume", iconSize = 16, onDone }) => {
  const [state, setState] = useState("idle"); // idle | busy | error

  const onClick = async () => {
    if (state === "busy") return;
    setState("busy");
    try {
      await downloadResume();
      setState("idle");
      onDone?.();
    } catch (err) {
      console.error(err);
      setState("error");
    }
  };

  const text = state === "busy" ? "Preparing…" : state === "error" ? "Try again" : label;

  return (
    <button type="button" onClick={onClick} onPointerEnter={preloadResume} onFocus={preloadResume} aria-busy={state === "busy"} disabled={state === "busy"} className={`${className} disabled:cursor-wait`}>
      <span aria-live="polite">{text}</span> <Download size={iconSize} />
    </button>
  );
};

export default ResumeButton;
