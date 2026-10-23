import type { Profile } from "./types";

// Single source of truth for the portfolio content. Edit this file to update the site.
export const profile: Profile = {
  name: "Oussama Bedoui",
  title: "Full Stack Engineer",
  location: "Lisbon, Portugal",
  yearsOfExperience: 6,
  summary:
    "I'm a Full Stack Software Engineer based in Lisbon, Portugal, with a solid foundation in both technology and business applications. I hold a Bachelor's degree in IT Applied to Management from ISG Tunis and an Engineering degree from SESAME University. Driven by a passion for creating innovative solutions, I'm always eager to tackle new challenges and contribute to impactful projects.",
  contact: {
    email: "bedouioussama@gmail.com",
    phone: "+351 920 665 830",
    linkedin: "https://www.linkedin.com/in/oussama-bedoui-26167212b",
  },
  services: [
    {
      title: "Frontend Engineering",
      description:
        "Angular applications from first component to production: complex forms, map-driven interfaces and pixel-faithful UIs built from designer handoffs in HTML5 and SCSS.",
    },
    {
      title: "Backend & APIs",
      description:
        "Spring Boot 3 and Java 17 services exposing REST and SOAP APIs, secured with Keycloak and backed by PostgreSQL, MySQL or Oracle.",
    },
    {
      title: "SaaS from Scratch",
      description:
        "Multi-tenant products taken through modeling, design and development to a working release, like the invoicing platform I'm building at Tanitflow.",
    },
    {
      title: "DevOps & Delivery",
      description:
        "GitLab CI pipelines, Docker and Kubernetes deployments on AKS and AWS, with SonarQube quality gates and Jest and JUnit test suites.",
    },
    {
      title: "Batch & Integration",
      description:
        "Scheduled Spring Batch jobs orchestrated with Control-M, RabbitMQ messaging and cross-system integration across microservice architectures.",
    },
  ],
  focus: [
    "Angular",
    "Spring Boot",
    "Java",
    "Kubernetes",
    "AWS",
    "Microservices",
    "Docker",
  ],
  experience: [
    {
      role: "Full Stack Angular Java Engineer",
      company: "KLX",
      location: "Portugal",
      start: "2025-01",
      end: null,
      highlights: [
        "Contributed simultaneously to multiple projects, handling end-to-end feature development, bug fixing, and cross-system integration.",
        "Developed new modules and resolved functional and UI defects across frontend and backend using Angular 13/19, Spring Boot 3, and Java 17.",
        "Built and maintained CI/CD pipelines with GitLab CI, Docker, and Kubernetes, streamlining deployments across environments.",
        "Worked in Agile/Scrum with Jira: sprint planning, backlog grooming, and iterative delivery.",
        "Designed and maintained scheduled batch jobs with Spring Batch, orchestrated by Control-M for reliable automated execution.",
      ],
      stack: [
        "Angular 19",
        "Angular 13",
        "Spring Boot 3",
        "Java 17",
        "Spring Batch",
        "Control-M",
        "AWS",
        "Kubernetes",
        "Docker",
        "GitLab",
        "Jest",
        "JUnit",
      ],
    },
    {
      role: "CEO & Independent Full Stack Engineer",
      company: "Tanitflow",
      location: "Tunisia",
      start: "2024-08",
      end: null,
      highlights: [
        "Building a multi-tenant invoicing SaaS from scratch with Angular on the frontend and Spring Boot 3 with MySQL on the backend.",
        "Owned every phase of the product: domain modeling, design, and development through to a working release.",
      ],
      stack: [
        "Angular 14",
        "Spring Boot 3",
        "MySQL",
        "GitHub",
        "REST",
        "Kanban",
      ],
    },
    {
      role: "Front End Freelance Engineer",
      company: "Teachica",
      location: "Tunisia",
      start: "2024-08",
      end: null,
      highlights: [
        "Developed the Angular frontend of a teaching platform.",
        "Implemented designs from a professional designer in HTML5 and SCSS, improving the UI and user experience.",
        "Used GitHub for version control and CI/CD, following Kanban with Trello for timely delivery.",
      ],
      stack: ["Angular 14", "SCSS", "GitHub", "REST", "Kanban", "Trello"],
    },
    {
      role: "Front End Angular Engineer",
      company: "Locatify",
      location: "Iceland",
      start: "2022-02",
      end: "2024-07",
      highlights: [
        "Co-developed a CMS, starting on Angular 13 and upgrading through Angular 17.",
        "Built advanced map features with the Google Maps JavaScript API v3 and Angular Material.",
        "Implemented designer-provided HTML5/SCSS designs; worked in Scrum with Jira, then Kanban with Trello, on GitLab.",
      ],
      stack: [
        "Angular 17",
        "Google Maps API",
        "Angular Material",
        "GitLab",
        "Scrum",
        "Jira",
      ],
    },
    {
      role: "Full Stack JS Developer",
      company: "DnD Serv",
      location: "Bizerte, Tunisia",
      start: "2020-01",
      end: "2022-01",
      highlights: [
        "First developer at a company moving into software, building an ERP for a client in Qatar on the MEAN stack (Angular, Node.js, Express.js, MySQL).",
        "Hired two developers and led the build of an internal CRM for a second client to track project statuses and staff approvals.",
        "Ran delivery with Scrum in Jira, later Kanban in Trello, with GitHub for version control and CI/CD.",
      ],
      stack: ["Angular 7", "Node.js", "Express.js", "MySQL", "GitHub", "Scrum"],
    },
  ],
  education: [
    {
      degree: "Computer Science Engineer",
      school: "SESAME University",
      start: 2019,
      end: 2022,
    },
    {
      degree: "Fundamental Degree in Computer Science applied to Management",
      school: "ISG Tunis",
      start: 2016,
      end: 2019,
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["Angular 19", "JavaScript", "HTML5", "SCSS", "Three.js"],
    },
    {
      category: "Backend",
      skills: [
        "Java",
        "Spring Boot 3",
        "Node.js",
        "Express.js",
        "Nest.js",
        "PHP",
        "Microservices",
        "RabbitMQ",
        "Keycloak",
      ],
    },
    {
      category: "APIs & Data",
      skills: ["REST", "SOAP", "XML", "PostgreSQL", "MySQL", "Oracle DB"],
    },
    {
      category: "DevOps & Cloud",
      skills: [
        "GitLab CI/CD",
        "Docker",
        "Kubernetes",
        "AKS",
        "AWS",
        "SonarQube",
      ],
    },
    {
      category: "Testing",
      skills: ["Jest", "JUnit"],
    },
  ],
  languages: [
    { name: "Arabic", level: "C2" },
    { name: "English", level: "C2" },
    { name: "French", level: "C2" },
  ],
};
