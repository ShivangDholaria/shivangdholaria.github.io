import { Font } from "@react-pdf/renderer";

import regular from "@fontsource/lato/files/lato-latin-400-normal.woff?url";
import italic from "@fontsource/lato/files/lato-latin-400-italic.woff?url";
import bold from "@fontsource/lato/files/lato-latin-700-normal.woff?url";
import boldItalic from "@fontsource/lato/files/lato-latin-700-italic.woff?url";

// Lato is bundled with the site (from the @fontsource/lato package), so the PDF never
// depends on an outside font server. In the browser the URLs load as they are; under
// `npm run resume` (Node) they are read from the project folder instead.
const src = (url) => (typeof window === "undefined" ? `${globalThis.process.cwd()}${url}` : url);

let registered = false;

export function registerFonts() {
  if (registered) return;
  Font.register({
    family: "Lato",
    fonts: [
      { src: src(regular) },
      { src: src(italic), fontStyle: "italic" },
      { src: src(bold), fontWeight: 700 },
      { src: src(boldItalic), fontWeight: 700, fontStyle: "italic" },
    ],
  });
  // Keep words whole instead of hyphenating them across lines.
  Font.registerHyphenationCallback((word) => [word]);
  registered = true;
}
