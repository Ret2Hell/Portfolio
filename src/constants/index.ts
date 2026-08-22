export interface CertificateData {
  id: number;
  title: string;
  issuer: string;
  issued: string;
  credentialId: string;
  credentialUrl?: string;
  image?: string;
  logo?: string;
}

export interface TechnologyTag {
  id: number;
  name: string;
  path?: string;
}

export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  date: string;
  description: string;
  subDescription: string[];
  repository?: string;
  liveDemo?: string;
  href?: string;
  image: string;
  images?: string[];
  tags: TechnologyTag[];
}

export interface ExperienceData {
  title: string;
  job: string;
  date: string;
  contents: string[];
}

export interface SocialData {
  name: string;
  href: string;
  icon: string;
}

export interface ReviewData {
  name: string;
  username: string;
  body: string;
  img: string;
}

// Certificate images live in /public/assets/certificates.
export const myCertificates: CertificateData[] = [
  {
    id: 1,
    title: "Certified Junior React Developer",
    issuer: "Certificates.dev",
    issued: "Mar 2026",
    credentialId: "a16e5d1c-4964-46d7-a160-29123d8bf13e",
    credentialUrl:
      "https://certificates.dev/react/certificates/a16e5d1c-4964-46d7-a160-29123d8bf13e",
    image: "/assets/certificates/react-junior-certificate.jpg",
  },
  {
    id: 2,
    title: "Efficient Large Language Model (LLM) Customization",
    issuer: "NVIDIA",
    issued: "Apr 2025",
    credentialId: "aypdaRoIRZ2BfTH11yvzaw",
    credentialUrl: "https://learn.nvidia.com/certificates?id=aypdaRoIRZ2BfTH11yvzaw",
    image: "/assets/certificates/nvidia-llm-customization.png",
  },
  {
    id: 3,
    title: "Certificate of Achievement — Data Scientist",
    issuer: "365 Data Science",
    issued: "Nov 2024",
    credentialId: "DD-80A63C6939",
    credentialUrl: "https://learn.365datascience.com/certificates/DD-80A63C6939/",
    image: "/assets/certificates/DD-80A63C6939.jpg",
  },
  {
    id: 4,
    title: "Data Preprocessing with NumPy",
    issuer: "365 Data Science",
    issued: "Nov 2024",
    credentialId: "CC-BE88803986",
    credentialUrl: "https://learn.365datascience.com/certificates/CC-BE88803986/",
    image: "/assets/certificates/CC-BE88803986.jpg",
  },
  {
    id: 5,
    title: "Deep Learning with TensorFlow 2",
    issuer: "365 Data Science",
    issued: "Nov 2024",
    credentialId: "CC-23E5AB635F",
    credentialUrl: "https://learn.365datascience.com/certificates/CC-23E5AB635F/",
    image: "/assets/certificates/CC-23E5AB635F.jpg",
  },
  {
    id: 6,
    title: "Machine Learning in Python",
    issuer: "365 Data Science",
    issued: "Nov 2024",
    credentialId: "CC-4F46109E5F",
    credentialUrl: "https://learn.365datascience.com/certificates/CC-4F46109E5F/",
    image: "/assets/certificates/CC-4F46109E5F.jpg",
  },
  {
    id: 7,
    title: "Python Programmer Bootcamp",
    issuer: "365 Data Science",
    issued: "Nov 2024",
    credentialId: "CC-5E48FF1CBC",
    credentialUrl: "https://learn.365datascience.com/certificates/CC-5E48FF1CBC/",
    image: "/assets/certificates/CC-5E48FF1CBC.jpg",
  },
  {
    id: 8,
    title: "SQL",
    issuer: "365 Data Science",
    issued: "Nov 2024",
    credentialId: "CC-6DAD10D1F3",
    credentialUrl: "https://learn.365datascience.com/certificates/CC-6DAD10D1F3/",
    image: "/assets/certificates/CC-6DAD10D1F3.jpg",
  },
  {
    id: 9,
    title: "Introduction to Data and Data Science",
    issuer: "365 Data Science",
    issued: "Nov 2024",
    credentialId: "CC-40F5CFB6ED",
    credentialUrl: "https://learn.365datascience.com/certificates/CC-40F5CFB6ED/",
    image: "/assets/certificates/CC-40F5CFB6ED.jpg",
  },
];

// Each project keeps its images in /public/assets/projects/<project-folder>.
// Replace cover.jpg for the card image. Add gallery images to the `images` array.
export const myProjects: ProjectData[] = [
  {
    id: 1,
    slug: "i18n-mcp",
    title: "i18n-mcp",
    date: "Jun 2026 – Jul 2026",
    description:
      "A safe i18n automation MCP server for auditing, planning, and maintaining locale files.",
    subDescription: [
      "Built a Go MCP server with 16 tools over stdio and Streamable HTTP for locale detection, translation audits, batch planning, and static dead-key analysis.",
      "Implemented preview-first writes with project-root guards, atomic updates, source-drift detection, and validation for placeholders, ICU syntax, HTML-like tags, and Markdown.",
      "Built GitHub Actions CI/CD for race-tested builds, linting, security scans, automated tagging, and GoReleaser releases across Linux, macOS, Windows, and Docker.",
    ],
    repository: "https://github.com/Ret2Hell/i18n-mcp",
    image: "/assets/projects/i18n-mcp/cover.jpg",
    images: [
      "/assets/projects/i18n-mcp/cover.jpg",
      // "/assets/projects/i18n-mcp/screenshot-1.jpg",
    ],
    tags: [
      { id: 1, name: "Go", path: "/assets/logos/go.svg" },
      { id: 2, name: "MCP" },
      { id: 3, name: "GitHub Actions", path: "/assets/logos/githubactions.svg" },
      { id: 4, name: "Docker", path: "/assets/logos/docker.svg" },
      { id: 5, name: "GoReleaser" },
    ],
  },
  {
    id: 2,
    slug: "tanilytics",
    title: "Tanilytics",
    date: "Mar 2026 – Jun 2026",
    description:
      "A privacy-first analytics platform for collecting and processing blog media engagement at scale.",
    subDescription: [
      "Built an extensible TypeScript analytics SDK with batching, retries, and plugins, including an npm adapter that captures embedded YouTube events.",
      "Developed a high-throughput Go/Fiber ingestion service with schema validation, RedisBloom deduplication, and durable asynchronous publishing to Redpanda.",
      "Built a stream-processing pipeline for event enrichment and anonymization, real-time state in Redis, and analytical storage in ClickHouse.",
    ],
    repository: "https://github.com/orgs/Tanilytics/repositories",
    image: "/assets/projects/tanilytics/cover.jpg",
    images: [
      "/assets/projects/tanilytics/cover.jpg",
      // "/assets/projects/tanilytics/screenshot-1.jpg",
    ],
    tags: [
      { id: 1, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 2, name: "Go", path: "/assets/logos/go.svg" },
      { id: 3, name: "Fiber" },
      { id: 4, name: "Redis", path: "/assets/logos/redis.svg" },
      { id: 5, name: "Redpanda" },
      { id: 6, name: "ClickHouse" },
    ],
  },
  {
    id: 3,
    slug: "e-sihha",
    title: "E-Sihha",
    date: "Mar 2025 – May 2025",
    description:
      "A microservices-based healthcare platform with secure access and purpose-built data stores.",
    subDescription: [
      "Implemented microservices with NestJS, using RabbitMQ as the transport layer for inter-service communication.",
      "Leveraged polyglot persistence by integrating PostgreSQL and MongoDB, each chosen per microservice use case.",
      "Integrated Clerk for secure authentication and role-based access control across services.",
    ],
    repository: "https://github.com/Ret2Hell/e-Sihha",
    image: "/assets/projects/e-sihha/cover.jpg",
    images: [
      "/assets/projects/e-sihha/cover.jpg",
      // "/assets/projects/e-sihha/screenshot-1.jpg",
    ],
    tags: [
      { id: 1, name: "NestJS", path: "/assets/logos/nestjs.svg" },
      { id: 2, name: "RabbitMQ", path: "/assets/logos/rabbitmq.svg" },
      { id: 3, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
      { id: 4, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 5, name: "Clerk" },
    ],
  },
];

export const mySocials: SocialData[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-yassine-taieb-2016552a0/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/Ret2Hell",
    icon: "/assets/logos/github.svg",
  },
];

export const experiences: ExperienceData[] = [
  {
    title: "Software Engineer",
    job: "RaiseLabs · Remote",
    date: "Nov 2025 – Present",
    contents: [
      "Build AI-powered features for TeachingHero, including an AI assistant and agentic workflows that automate course generation and content creation.",
      "Extend Oterax LLM services with structured outputs, streaming, BYOK support, model preferences, and observability using Flask, Vercel AI SDK, Pydantic AI, and Pydantic Logfire.",
      "Integrate Cloudflare R2 for generated media and Cloudflare Turnstile for bot protection and secure user verification.",
    ],
  },
  {
    title: "Software Engineer Intern",
    job: "TAHO AI",
    date: "Jun 2025 – Jul 2025",
    contents: [
      "Designed a RabbitMQ transport layer using an RPC pattern for efficient inter-service communication.",
      "Developed the interface with Next.js, React Query for data fetching, and Zod for schema validation.",
      "Defined and configured the MCP server used by AI agents.",
    ],
  },
  {
    title: "Full-Stack Developer",
    job: "Digital Bundle",
    date: "Aug 2024 – Nov 2024",
    contents: [
      "Built responsive Vue.js and Tailwind CSS interfaces for Levii, an ERP platform that streamlines core business operations.",
      "Secured REST endpoints with custom Laravel middleware and JWT authentication.",
      "Architected search, filtering, and pagination mechanisms for efficient, scalable data retrieval.",
    ],
  },
];
export const reviews: ReviewData[] = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
