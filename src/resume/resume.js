// ─────────────────────────────────────────────────────────────────────────────
// RESUME CONTENT
//
// This file is the resume, and only the resume. The website does not read it:
// the site's short overview lives in src/constants/index.js.
//
// Edit anything below, commit and push. The next time someone clicks a resume
// button on the site, the PDF is built from this file.
//
// Tips
// - Any section left as an empty list [] is left out of the PDF.
// - Any optional field left as "" is left out (phone, description, gpa, ...).
// - Bullets read best as: what you did, how, and the result (with a number).
// - The PDF flows onto a second page if the content needs it.
// ─────────────────────────────────────────────────────────────────────────────

export const resume = {
  // ── Header ────────────────────────────────────────────────────────────────
  name: "Shivang Dholaria",
  title: "Backend Engineer",
  location: "New York, NY",
  email: "dholariashivang@gmail.com",
  phone: "(908) 922-5323", // optional, e.g. "(555) 123-4567"
  links: [
    { label: "github.com/ShivangDholaria", url: "https://github.com/ShivangDholaria" },
    { label: "linkedin.com/in/shivangdholaria", url: "https://www.linkedin.com/in/shivangdholaria" },
    { label: "shivangdholaria.github.io", url: "https://shivangdholaria.github.io" },
  ],

  // ── Summary ───────────────────────────────────────────────────────────────
  // One short paragraph. Leave "" to drop the section (currently hidden).
  summary: "",

  // ── Experience ────────────────────────────────────────────────────────────
  // Most recent first. `stack` is optional.
  experience: [
    {
      role: "Software Engineer",
      company: "Surya Insurance",
      location: "New York, NY",
      dates: "Aug 2025 – Present",
      bullets: [
        "Migrated the legacy full-stack policy management application to a modern stack single-handedly, with zero disruption to active policy operations; agents and underwriters kept working on it throughout.",
        "Built the internal reporting system from scratch, replacing C-suite reports that were assembled by hand; it generates each report automatically and routes it to the right executive, saving $1M+.",
        "Implementing an AI intake pipeline that parses incoming policy applications, validates them against underwriting guidelines and writes clean records to the policy management system, to cut manual data entry and speed up underwriter review.",
        "Automated email workflows for cancellations, reinstatements, endorsements and payments.",
        "Own the CI/CD pipeline and lead bug triage for the platform.",
      ],
      stack: "Python, React, TypeScript, REST, MongoDB, AWS, CI/CD",
    },
    {
      role: "Software Engineer",
      company: "Gracious Home Care",
      location: "",
      dates: "Aug 2024 – Jul 2025",
      bullets: [
        "Broke a monolithic patient-management application into independently deployable Spring Boot and Django services, so changes no longer shipped the whole system.",
        "Kept caregiver and patient data flows reliable across the patient-management system during and after the split.",
        "Set up and maintained CI/CD for the web applications and each newly decoupled service.",
        "Built and maintained patient-management workflows and internal tooling.",
      ],
      stack: "Java, Spring Boot, Python, Django, REST, CI/CD",
    },
    {
      role: "Software Development Intern",
      company: "Gridleaf",
      location: "",
      dates: "Dec 2021 – Feb 2022",
      bullets: [
        "Sole developer on a 2D driving game promoting electric vehicles: five levels, car physics written from scratch, and an EV charging mechanic.",
        "Demoed the game live at Gridleaf's booth at SXSW.",
      ],
      stack: "C#, Unity",
    },
  ],

  // ── Projects ──────────────────────────────────────────────────────────────
  // `description` and `stack` are optional; add a line on what each one does.
  // Currently hidden. To show a Projects section, add entries like:
  //   { name: "Bank Transaction API", url: "https://github.com/ShivangDholaria/Microtransaction-Project",
  //     description: "What it does and what you used.", stack: "Java, Spring Boot" },
  projects: [],

  // ── Skills ────────────────────────────────────────────────────────────────
  skills: [
    { group: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "C#"] },
    { group: "Backend", items: ["Spring Boot", "Django", "REST APIs"] },
    { group: "Data", items: ["MongoDB"] },
    { group: "Cloud and DevOps", items: ["AWS", "Docker", "CI/CD pipelines", "Git"] },
    { group: "Frontend", items: ["React"] },
  ],

  // ── Education ─────────────────────────────────────────────────────────────
  // `location`, `gpa` and `details` are optional.
  education: [
    {
      school: "Stevens Institute of Technology",
      degree: "M.S., Computer Science",
      location: "Hoboken, NJ",
      dates: "Sep 2022 – Aug 2024",
      gpa: "",
      details: "", // e.g. relevant coursework
    },
    {
      school: "BMS Institute of Technology and Management",
      degree: "B.E., Computer Science",
      location: "",
      dates: "2018 – 2022",
      gpa: "",
      details: "",
    },
  ],

  // ── Optional sections ─────────────────────────────────────────────────────
  // Each item is one line. Leave [] to hide the section.
  certifications: [], // e.g. "AWS Certified Developer – Associate (2025)"
  awards: [],
};
