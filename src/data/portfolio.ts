
export const profile = {
  name: "Aniket Maurya",
  title: "SDET / QA Engineer",
  tagline: "Building resilient test automation that ships code with confidence.",
  summary:
    "SDET with 6+ years engineering test frameworks for web & API platforms across BFSI, retail and supply-chain. I obsess over execution stability, signal-to-noise in test reports, and shipping fast without breaking trust.",
  location: "Mumbai, India",
  email: "aniketmaurya1702@gmail.com",
  phone: "+91 7738306641",
  linkedin: "https://www.linkedin.com/in/aniketmaurya1702/",
  github: "https://github.com/aniket1702",
  cv: "/aniket-maurya-cv.pdf",
};

export const skillGroups = [
  {
    title: "Automation & Languages",
    span: "lg:col-span-8",
    items: [
      "Core Java", "Selenium WebDriver", "Playwright", "TestNG",
      "Karate BDD", "Maven", "Apache JMeter", "Apache POI",
    ],
    tone: "primary",
  },
  {
    title: "Frameworks",
    span: "lg:col-span-4",
    items: ["POM Architecture", "Karate BDD", "Data-driven", "Hybrid"],
    tone: "secondary",
  },
  {
    title: "CI/CD & Version Control",
    span: "lg:col-span-4",
    items: ["GitHub", "Bitbucket", "Jenkins", "CI/CD Pipelines"],
    tone: "secondary",
  },
  {
    title: "Databases",
    span: "lg:col-span-4",
    items: ["SQL Server", "PL/SQL", "Data validation"],
    tone: "secondary",
  },
  {
    title: "Test & Defect Management",
    span: "lg:col-span-4",
    items: ["JIRA", "QMetry", "Rally", "Allure", "Extent Reports"],
    tone: "secondary",
  },
];

export const methodologies = [
  "Functional", "Regression", "E2E", "Smoke", "Sanity",
  "API", "Performance", "Load", "Stress", "Chaos",
  "Database", "Messaging (Kafka)", "Cross-Browser (BrowserStack)",
];

export const experience = [
  {
    company: "Accenture",
    role: "QA Lead — Europcar Mobility Group (Travel / Mobility)",
    period: "Sept 2024 — Present",
    location: "On-site",
    stack: ["Cucumber", "Karate", "Java", "TestNG", "JMeter", "SQL"],
    bullets: [
      "Managing and delivering end-to-end automation for Europcar's mobility platform.",
      "Leading a team of QA engineers, ensuring adherence to best practices and quality standards.",
      "Designing automtion test scripts for functional, regression testing using Cucumber and Karate frameworks.",
      "Validate legacy and new features through SQL queries.",
      "Validate the lifecycle of the vehicle mobility platform through API testing."

    ],
  },
  {
    company: "Persistent Systems",
    role: "SDET — Mastercard (BFSI / Payments)",
    period: "Sept 2024 — May 2026",
    location: "On-site",
    stack: ["Playwright", "Java", "TestNG", "JMeter", "SQL", "Mailinator"],
    bullets: [
      "Designed a scalable Playwright + Java + TestNG framework with POM and data-driven layers; integrated Extent Reports.",
      "Automated OTP-driven authentication flows using Mailinator APIs, eliminating manual gating in regression cycles.",
      "Authored & tuned SQL / PL-SQL validation queries for BFSI dashboards and KPI reconciliation.",
      "Ran performance, load & stress tests with JMeter against B2B OMS — monitored SLAs, throughput and response times.",
      "Conducted chaos testing to validate resilience under degraded service conditions.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "QA Engineer — The Kroger Co. (Retail)",
    period: "May 2022 — Sept 2024",
    location: "Mumbai",
    stack: ["Karate BDD", "Selenium", "Kafka", "Java", "Maven"],
    bullets: [
      "Led end-to-end API testing programme using a Karate BDD framework I designed from scratch.",
      "Implemented Kafka-based messaging validation across event-driven retail services.",
      "Contributed to a Selenium POM UI automation framework — functional, regression, smoke & sanity suites.",
      "Crafted resilient XPath locators with ~99% identification accuracy.",
    ],
  },
  {
    company: "Larsen & Toubro",
    role: "QA Engineer — OMP (Supply Chain)",
    period: "Dec 2019 — Mar 2022",
    location: "Mumbai",
    stack: ["Spring Boot", "Java", "TestNG", "Maven", "JIRA"],
    bullets: [
      "Owned testing of Spring Boot services — SDLC, STLC and defect lifecycle, end-to-end.",
      "Authored detailed test scenarios and managed defect tracking & triage in JIRA.",
      "Built and maintained a reliable XPath locator catalogue for UI suites.",
    ],
  },
];

export const projects = [
  {
    name: "Automation Framework",
    tag: "OPEN SOURCE",
    description:
      "A production-grade Selenium + Java + TestNG framework with Allure reporting, QMetry integration, BrowserStack cross-browser execution, TestNG listeners, data providers, and Apache POI for excel-driven test data.",
    tech: ["Java", "Selenium", "TestNG", "Maven", "Allure", "BrowserStack", "QMetry"],
    link: "https://github.com/aniket1702",
  },
];

export const achievements = [
  { value: "80%", label: "Manual validation effort reduced via SQL / PL-SQL optimisation" },
  { value: "98%", label: "Execution stability gain through Selenium POM refactor" },
  { value: "90%", label: "Manual testing eliminated by automating regression suites" },
  { value: "99%", label: "Accuracy in UI element identification via XPath" },
  { value: "40%", label: "Team QMA score boost — recognised by client" },
];

export const education = [
  {
    school: "Vivekananda Education Society — Arts, Science & Commerce",
    degree: "B.Sc — Information Technology",
    period: "2016 — 2019",
    score: "CGPA 8.75",
  },
  {
    school: "Christ Academy Jr. College",
    degree: "12th — Science",
    period: "",
    score: "57.25%",
  },
];
