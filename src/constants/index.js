import {
  api_proj,
  aws,
  csharp,
  docker,
  git,
  graph,
  java,
  javascript,
  mongodb,
  python,
  reactjs,
  spring,
  typescript,
  unity,
  writeup,
} from "../assets";

export const profile = {
  name: "Shivang Dholaria",
  roles: ["Backend Engineer", "Full-Stack Developer"],
  tagline:
    "I build and modernize backend-heavy full-stack systems in insurance, healthcare, and fintech — where reliability and clean systems matter.",
  location: "New York City Metropolitan Area",
  email: "dholariashivang@gmail.com",
  available: true,
  resumeUrl: "/resume.pdf", // drop resume.pdf into /public
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const socials = [
  { name: "GitHub", url: "https://github.com/ShivangDholaria", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shivangdholaria",
    icon: "linkedin",
  },
  { name: "Email", url: "mailto:dholariashivang@gmail.com", icon: "mail" },
];

export const about = {
  paragraph:
    "I build backend-heavy full-stack systems in industries where bugs become regulatory problems. At Surya Insurance I single-handedly migrated a legacy full-stack app to a modern stack and built a reporting system that saved the company $1M+ through automation — and I'm now shipping an AI pipeline that parses policy applications, validates them against underwriting guidelines, and writes clean data into the policy management system. Earlier, I rebuilt patient-management systems and set up CI/CD from scratch at a home-healthcare company. I like owning features end-to-end — from “this is a problem” to “this is in production” — and modernizing legacy systems without breaking what already works. MS in Computer Science, Stevens Institute of Technology.",
};

export const services = [
  {
    title: "Backend & APIs",
    description:
      "Java, Spring Boot, Python, and REST APIs backed by MongoDB — reliable services for regulated domains.",
  },
  {
    title: "Full-Stack Delivery",
    description:
      "React and TypeScript front-ends when the work calls for it, owned end-to-end from problem to production.",
  },
  {
    title: "Cloud & CI/CD",
    description:
      "AWS, CI/CD pipelines, and deployment automation — modernizing legacy systems without breaking what works.",
  },
];

export const technologies = [
  { name: "Java", icon: java },
  { name: "Spring Boot", icon: spring },
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: reactjs },
  { name: "MongoDB", icon: mongodb },
  { name: "AWS", icon: aws },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "C#", icon: csharp },
  { name: "Unity", icon: unity },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "Surya Insurance Company, RRG",
    date: "August 2025 — Present",
    points: [
      "Migrated the company's legacy full-stack application to a modern stack single-handedly — modernizing the front-end and underlying services without disrupting active policy operations.",
      "Built the internal reporting system from the ground up, automating manual reports and routing the right data to C-suite stakeholders — saving the company $1M+.",
      "Implementing an AI-powered intake pipeline that parses policy applications, validates them against underwriting guidelines, and writes clean records into the policy management system.",
      "Automated transactional email workflows (cancellations, reinstatements, endorsements, payments), maintain the CI/CD pipeline, and lead bug triage and resolution.",
    ],
    stack: [
      "Python",
      "React",
      "TypeScript",
      "REST APIs",
      "MongoDB",
      "AWS",
      "CI/CD",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Gracious Home Care",
    date: "August 2024 — July 2025",
    points: [
      "Built microservices to decouple the company's monolith into independently deployable services with Java Spring Boot and Python Django — improving maintainability, scalability, and deployment velocity.",
      "Diagnosed and resolved bugs across the patient-management system, keeping caregiver and patient data flows reliable in a regulated healthcare environment.",
      "Maintained and improved the CI/CD pipeline for reliable, repeatable deployments across web apps and newly decoupled services.",
    ],
    stack: ["Java", "Spring Boot", "Python", "Django", "REST APIs", "CI/CD"],
  },
  {
    title: "Software Development Intern",
    company_name: "Gridleaf",
    date: "December 2021 — February 2022",
    points: [
      "Sole developer on a top-down 2D driving game promoting electric vehicles, built for Gridleaf's product marketing — designed and built all five levels end-to-end.",
      "Wrote the core car mechanics from scratch (driving physics, controls) and simulated a realistic EV charging-station experience as a core gameplay mechanic.",
      "Featured at SXSW and demoed live at Gridleaf's booth as part of the company's product showcase.",
    ],
    stack: ["C#", "Unity", "Game Design"],
  },
];

export const education = [
  {
    school: "Stevens Institute of Technology",
    degree: "M.S., Computer Science",
    date: "Sep 2022 — Aug 2024",
  },
  {
    school: "BMS Institute of Technology and Management",
    degree: "B.E., Computer Science",
    date: "2018 — 2022",
  },
];

export const projects = [
  {
    name: "Bank Transaction API",
    category: "Software Engineering",
    description:
      "Backend API to credit and debit account balances, with an event logger that records every failed and successful transaction.",
    image: api_proj,
    source_code_link:
      "https://github.com/ShivangDholaria/Microtransaction-Project",
  },
  {
    name: "Graph Visualizer",
    category: "Game Development",
    description:
      "A Unity project that graphs and visualizes different mathematical functions in 3D space, with a picker to switch between functions.",
    image: graph,
    source_code_link: "https://github.com/ShivangDholaria/Graph_V2",
  },
  {
    name: "Technical Write-Ups",
    category: "Cybersecurity",
    description:
      "Technical write-ups documenting the machines and CTF challenges I've solved.",
    image: writeup,
    source_code_link: "https://github.com/ShivangDholaria/Writeups",
  },
];
