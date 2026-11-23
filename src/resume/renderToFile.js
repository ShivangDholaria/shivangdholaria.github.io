import { createElement } from "react";
import { renderToFile } from "@react-pdf/renderer";

import ResumeDocument from "./ResumeDocument";

// Used by `npm run resume` (scripts/resume-preview.mjs) to write the PDF in Node.
// It lives here so it shares the same PDF library instance (and registered fonts) as the layout.
export const renderResumeToFile = (path) => renderToFile(createElement(ResumeDocument), path);
