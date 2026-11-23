// All site copy lives here.

export const base = import.meta.env.BASE_URL; // for files in /public, e.g. the photo below

export const profile = {
  name: "Shivang Dholaria",
  role: "Backend engineer",
  location: "New York",
  email: "dholariashivang@gmail.com",
  available: true,
  availability: "open to backend roles",
  // The hero headline; the accent words are set in gold italics.
  headline: "Modernizing the systems regulated businesses",
  headlineAccent: "run on.",
  tagline:
    "Java, Spring Boot and Python for insurance and healthcare, shipped without breaking what already works. Right now: the policy platform agents and underwriters use every day at Surya Insurance.",
  // Drop a square portrait into /public (e.g. me.jpg) and set: photo: `${base}me.jpg`.
  // Until then the hero shows what I'm building now (the `pipeline` below) in its place.
  photo: null,
};

export const navLinks = [
  { id: "work", title: "Work" },
  { id: "experience", title: "Experience" },
  { id: "about", title: "About" },
  { id: "contact", title: "Contact" },
];

export const socials = [
  { name: "GitHub", url: "https://github.com/ShivangDholaria" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/shivangdholaria" },
];

// What I'm building now (shown in the hero, or in the work section once a photo is set).
export const pipeline = {
  title: "Building now: NLP query to report",
  status: "In progress",
  steps: [
    { label: "Question", note: "asked in plain English", icon: "chat" },
    { label: "Interpret", note: "NLP turns it into a query", icon: "lines", highlight: true },
    { label: "Query", note: "runs against policy data", icon: "db" },
    { label: "Report", note: "built and delivered", icon: "file" },
  ],
};

export const metrics = [
  { value: "$1M+", label: "saved by an automated reporting system", mark: true },
  { value: "0", label: "disruptions during a solo platform migration" },
  { value: "2", label: "regulated industries: insurance and healthcare" },
];

export const about = {
  headline: "Reliable backends for businesses that can't afford downtime.",
  paragraphs: [
    "In insurance and healthcare, a bug isn't just a bug. It's a compliance problem. So I lean toward reliable, unglamorous backends: Java and Spring Boot, Python, REST APIs, and CI/CD that makes every release repeatable.",
    "I like owning a feature from the first report of a problem to production: building the service and the React and TypeScript UI around it, shipping it through the pipeline, and leading triage when something comes back.",
  ],
  next: "Next: backend-focused roles at mid-sized tech, fintech and healthtech companies.",
  principles: [
    { title: "Don't break what works", body: "Migrate in steps that keep live operations running." },
    { title: "Automate the repeat work", body: "Reports, policy emails, deploys. If it's done by hand every week, it should be a system." },
    { title: "Own it to production", body: "Design it, build it, ship it, and stay on it through triage." },
  ],
};

export const stack = [
  { group: "Backend", items: ["Java", "Spring Boot", "Python", "Django", "REST APIs"] },
  { group: "Data", items: ["MongoDB"] },
  { group: "Cloud and delivery", items: ["AWS", "Docker", "CI/CD pipelines", "Git"] },
  { group: "Frontend", items: ["React", "TypeScript", "JavaScript"] },
];

export const experiences = [
  {
    title: "Software Engineer",
    company: "Surya Insurance",
    date: "Aug 2025 – Present",
    place: "New York",
    summary:
      "The policy management platform agents and underwriters use day to day for policies, payments and customer communications.",
    points: [
      "Migrated the legacy full-stack application to a modern stack single-handedly, without disrupting active policy operations.",
      "Built the internal reporting system from scratch, saving $1M+ by eliminating manual reporting.",
      "Built an AI intake pipeline that parses applications, validates them against underwriting guidelines and writes clean records.",
      "Building a natural-language query-to-report feature: ask a question in plain English, get the report.",
      "Automated email workflows for cancellations, reinstatements, endorsements and payments. I own CI/CD and lead bug triage.",
    ],
    stack: "Python · React · TypeScript · REST · MongoDB · AWS · CI/CD",
  },
  {
    title: "Software Engineer",
    company: "Gracious Home Care",
    date: "Aug 2024 – Jul 2025",
    place: "Home healthcare",
    summary: "Patient-management workflows, internal tooling and deployment infrastructure.",
    points: [
      "Broke the monolith into independently deployable Spring Boot and Django services.",
      "Kept caregiver and patient data flows reliable across the patient-management system.",
      "Set up and maintained CI/CD for the web apps and the newly decoupled services.",
    ],
    stack: "Java · Spring Boot · Python · Django · REST · CI/CD",
  },
  {
    title: "Software Development Intern",
    company: "Gridleaf",
    date: "Dec 2021 – Feb 2022",
    place: "Internship",
    body: "Sole developer on a 2D driving game promoting electric vehicles: five levels, car physics written from scratch, and an EV charging mechanic. Demoed live at Gridleaf's booth at SXSW.",
    stack: "C# · Unity · Game design",
  },
];

export const caseStudies = [
  {
    id: "reporting-system",
    org: "Surya Insurance",
    title: "Replacing hand-built executive reports with a system",
    rows: [
      { k: "Problem", v: "Reports for the C-suite were assembled by hand, and getting the right numbers to the right people took real time every cycle." },
      { k: "Built", v: "An internal reporting system that generates the reports automatically and routes each one to the right executive." },
    ],
    outcome: { strong: "$1M+", rest: "saved by eliminating manual reporting" },
    stack: "Python · MongoDB · AWS",
  },
  {
    id: "legacy-migration",
    org: "Surya Insurance",
    title: "Migrating a live policy platform to a modern stack, solo",
    rows: [
      { k: "Scope", v: "The full-stack application: front end and services." },
      { k: "Constraint", v: "Agents and underwriters kept working on it the whole time." },
    ],
    outcome: { strong: "0", rest: "disruptions to active policy operations" },
    stack: "React · TypeScript · REST",
  },
  {
    id: "monolith-split",
    org: "Gracious Home Care",
    title: "Breaking a healthcare monolith into services",
    rows: [
      { k: "Problem", v: "One codebase held every patient and caregiver workflow, so every change shipped everything." },
      { k: "Built", v: "Independently deployable Spring Boot and Django services, each with its own CI/CD." },
    ],
    outcome: { strong: "Shipped", rest: "with patient data flows kept reliable throughout" },
    stack: "Java · Spring Boot · Django",
  },
];

export const sideProjects = [
  { name: "Bank transaction API", url: "https://github.com/ShivangDholaria/Microtransaction-Project" },
  { name: "Graph visualizer", url: "https://github.com/ShivangDholaria/Graph_V2" },
  { name: "CTF write-ups", url: "https://github.com/ShivangDholaria/Writeups" },
];

export const education = [
  { school: "Stevens Institute of Technology", degree: "M.S., Computer Science", date: "2022 – 2024" },
  { school: "BMS Institute of Technology and Management", degree: "B.E., Computer Science", date: "2018 – 2022" },
];
