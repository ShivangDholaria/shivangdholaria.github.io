// Inline SVG icons (currentColor), so they follow the theme.
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};
const svg = (size = 20) => ({ width: size, height: size, viewBox: "0 0 24 24" });

export const ArrowRight = ({ size, ...p }) => (
  <svg {...svg(size ?? 18)} {...stroke} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = ({ size, ...p }) => (
  <svg {...svg(size ?? 16)} {...stroke} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Download = ({ size, ...p }) => (
  <svg {...svg(size ?? 18)} {...stroke} {...p}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </svg>
);

export const Menu = ({ size, ...p }) => (
  <svg {...svg(size)} {...stroke} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = ({ size, ...p }) => (
  <svg {...svg(size)} {...stroke} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Sun = ({ size, ...p }) => (
  <svg {...svg(size ?? 18)} {...stroke} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const Moon = ({ size, ...p }) => (
  <svg {...svg(size ?? 18)} {...stroke} {...p}>
    <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
  </svg>
);

const File = (p) => (
  <svg {...svg(16)} {...stroke} {...p}>
    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
    <path d="M14 3v6h6" />
  </svg>
);
const Lines = (p) => (
  <svg {...svg(16)} {...stroke} {...p}>
    <path d="M4 7h16M4 12h10M4 17h7" />
  </svg>
);
const Check = (p) => (
  <svg {...svg(16)} {...stroke} strokeWidth={2.4} {...p}>
    <path d="m5 12 5 5 9-10" />
  </svg>
);
const Db = (p) => (
  <svg {...svg(16)} {...stroke} {...p}>
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
  </svg>
);

const Chat = (p) => (
  <svg {...svg(16)} {...stroke} {...p}>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
  </svg>
);

const stepIcons = { file: File, lines: Lines, check: Check, db: Db, chat: Chat };
export const StepIcon = ({ name, ...p }) => {
  const C = stepIcons[name] || File;
  return <C {...p} />;
};
