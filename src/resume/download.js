import { createElement } from "react";

import { resume } from "./resume";

// Builds the resume PDF in the browser and downloads it.
// The PDF library is loaded only on the first click, so it never slows the page down.
let loading;
const load = () =>
  (loading ??= Promise.all([import("@react-pdf/renderer"), import("./ResumeDocument")]).catch((err) => {
    loading = undefined; // allow a retry after a network error
    throw err;
  }));

// Start fetching the PDF code early (on hover or focus) so the click feels instant.
export const preloadResume = () => {
  load().catch(() => {});
};

export async function downloadResume() {
  const [{ pdf }, { default: ResumeDocument }] = await load();

  const blob = await pdf(createElement(ResumeDocument)).toBlob();
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${resume.name.replace(/\s+/g, "_")}_Resume.pdf`;
  document.body.appendChild(a);
  a.click();
  a.remove();

  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}
