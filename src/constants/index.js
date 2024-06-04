import {
  api_proj,
  aws,
  azure,
  backend,
  carrent,
  cpp,
  creator,
  csharp,
  css,
  docker,
  figma,
  gamedev,
  git,
  html,
  java,
  javascript,
  jobit,
  meta,
  graph,
  mobile,
  mongodb,
  nodejs,
  pentesting,
  plexflo,
  postgres,
  python,
  reactjs,
  redux,
  shopify,
  spring,
  sql,
  tailwind,
  tesla,
  threejs,
  tripguide,
  typescript,
  unity,
  unreal,
  web,
  wireshark
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Game Developer",
    icon: gamedev,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Penetration Tester",
    icon: pentesting,
  },
];

const technologies = [
  {
    name: "c_plus_plus",
    icon: cpp,
  },
  {
    name: "c#",
    icon: csharp,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "unity",
    icon: unity,
  },
  {
    name: "unreal",
    icon: unreal,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Azure",
    icon: azure,
  },
  // {
  //   name: "wireshark",
  //   icon: wireshark,
  // },
];

const experiences = [
  {
    title: "Game Physics Intern",
    company_name: "PlexFlo LLC",
    icon: plexflo,
    iconBg: "#383E56",
    date: "December 2021 - March 2022",
    points: [
      "Developed and maintained 2D electric vehicle simulation game using Unity3D to promote clean transportation and utilized 2D terrain design system to construct the game world and levels.",
      "Programmed a refueling system with queuing functionality to mimic real-world charging scenarios",
      "Implemented a spawning system that dynamically generates collectible objects in the game world after set time interval.",
    ],
  }

];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Bank Transaction API",
    description:
      "Backend API that allows users to credit and debit amount from their account along with an event logger to log all the failed and successful transactions.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring-Boot",
        color: "green-text-gradient",
      },
      {
        name: "Postgres",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
    ],
    image: api_proj,
    source_code_link: "https://github.com/ShivangDholaria/Microtransaction-Project",
  },
  {
    name: "Graph Visualizer",
    description:
      "A Unity project that visualizes different mathematical functions and graphs them in 3D space.User has a choice to select from different functions",
    tags: [
      {
        name: "Unity3D",
        color: "blue-text-gradient",
      },
      {
        name: " C#",
        color: "green-text-gradient",
      },
    ],
    image: graph,
    source_code_link: "https://github.com/ShivangDholaria/Graph_V2",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { experiences, projects, services, technologies, testimonials };

