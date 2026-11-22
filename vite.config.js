import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  // The resume PDF library (~1.6 MB) is its own chunk, loaded only when someone asks for the resume.
  build: { chunkSizeWarningLimit: 1800 },
});
