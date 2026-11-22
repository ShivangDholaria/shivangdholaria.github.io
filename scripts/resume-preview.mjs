// Writes the resume PDF to resume-preview.pdf so you can check edits to
// src/resume/resume.js without opening the site:  npm run resume
import { createServer } from "vite";
import { createElement } from "react";

const out = process.argv[2] || "resume-preview.pdf";
const vite = await createServer({ logLevel: "error", server: { middlewareMode: true }, appType: "custom" });

try {
  const { renderToFile } = await vite.ssrLoadModule("@react-pdf/renderer");
  const { default: ResumeDocument } = await vite.ssrLoadModule("/src/resume/ResumeDocument.jsx");
  await renderToFile(createElement(ResumeDocument), out);
  console.log(`Wrote ${out}`);
} finally {
  await vite.close();
}
