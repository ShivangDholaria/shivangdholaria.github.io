// Writes the resume PDF to resume-preview.pdf so you can check edits to
// src/resume/resume.js without opening the site:  npm run resume
import { createServer } from "vite";

const out = process.argv[2] || "resume-preview.pdf";
const vite = await createServer({ logLevel: "error", server: { middlewareMode: true }, appType: "custom" });

try {
  const { renderResumeToFile } = await vite.ssrLoadModule("/src/resume/renderToFile.js");
  await renderResumeToFile(out);
  console.log(`Wrote ${out}`);
} finally {
  await vite.close();
}
