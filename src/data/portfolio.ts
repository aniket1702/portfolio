export const navLinks = [
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
]

export const skills = {
  'Automation & Testing': [
    'Selenium WebDriver', 'Playwright', 'Karate BDD', 'TestNG',
    'Rest Assured', 'Apache JMeter', 'Page Object Model',
  ],
  'Programming & Data': [
    'Core Java', 'TypeScript', 'JavaScript', 'SQL / PL-SQL', 'Maven', 'Apache POI',
  ],
  'API & Messaging': [
    'REST APIs', 'Kafka', 'Postman', 'Mailinator API', 'Microservices Testing',
  ],
  'DevOps & CI/CD': [
    'Jenkins', 'GitHub Actions', 'BrowserStack', 'GitHub', 'Bitbucket',
  ],
  'Reporting & Management': [
    'Allure Reports', 'Extent Reports', 'JIRA', 'QMetry', 'Rally',
  ],
}

export const marqueeItems = [
  'Playwright', 'Selenium', 'Karate BDD', 'Java', 'TypeScript',
  'TestNG', 'Kafka', 'JMeter', 'REST APIs', 'SQL', 'Jenkins',
  'GitHub Actions', 'BrowserStack', 'Allure', 'JIRA', 'Microservices',
]

export const experience = [
  {
    company: 'Persistent Systems',
    role: 'SDET / QA Automation Engineer',
    domain: 'BFSI / Payment · Mastercard',
    period: 'Sept 2024 – Present',
    color: 'accent' as const,
    points: [
      'Designed scalable Playwright + Java + TestNG framework with POM and data-driven best practices',
      'Automated OTP-based auth via Mailinator APIs, cutting manual intervention significantly',
      'Optimized SQL/PL-SQL queries achieving 80% reduction in manual DB validation effort',
      'Executed load and performance testing with Apache JMeter for B2B Offer Management System',
      'Conducted chaos testing to evaluate system resilience under failure scenarios',
      'Integrated Extent Reports for comprehensive stakeholder-facing execution dashboards',
    ],
    tools: ['Playwright', 'Java', 'TestNG', 'SQL/PL-SQL', 'JMeter', 'Extent Reports'],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'QA Automation Engineer',
    domain: 'Retail Domain · The Kroger Co.',
    period: 'May 2022 – Sept 2024',
    color: 'accent2' as const,
    points: [
      'Led end-to-end API testing using Karate BDD framework across microservices',
      'Built Karate API automation framework from scratch — scalable, maintainable, reusable',
      'Implemented Kafka-based messaging validation for event-driven communication integrity',
      'Contributed to Selenium POM framework improving execution stability by ~98%',
      'Automated test suites reducing manual testing effort by 90%',
    ],
    tools: ['Karate BDD', 'Selenium', 'Kafka', 'Java', 'TestNG', 'JIRA'],
  },
  {
    company: 'Larsen & Toubro',
    role: 'QA Engineer',
    domain: 'Supply Chain Management · OMP',
    period: 'Dec 2019 – Mar 2022',
    color: 'accent3' as const,
    points: [
      'Led testing of Spring Boot applications using Java, Maven, and TestNG',
      'Designed reliable XPath locators achieving 99% accuracy in UI element identification',
      'Managed full defect lifecycle in JIRA with full traceability',
      'Boosted team QMA score by 40% through quality improvement strategies',
    ],
    tools: ['Java', 'Selenium', 'Maven', 'TestNG', 'JIRA', 'Spring Boot'],
  },
]

export const projects = [
  {
    emoji: '🎭',
    name: 'Playwright E2E Framework',
    domain: 'BFSI · Mastercard',
    desc: 'Scalable Playwright + Java + TestNG framework with POM architecture. OTP automation via Mailinator APIs and Extent Report dashboards.',
    tags: ['Playwright', 'Java', 'TestNG', 'Extent Reports'],
    gradient: 'from-accent to-accent2',
  },
  {
    emoji: '⚡',
    name: 'Karate API Framework',
    domain: 'Retail · Kroger',
    desc: 'Built from scratch — fully reusable Karate BDD API framework with Kafka event validation. 90% manual testing reduction.',
    tags: ['Karate BDD', 'Kafka', 'REST APIs', 'Java'],
    gradient: 'from-accent2 to-accent3',
  },
  {
    emoji: '🗄️',
    name: 'SQL Validation Suite',
    domain: 'BFSI · Mastercard',
    desc: 'Optimized SQL/PL-SQL queries for large dataset validation and KPI accuracy — 80% DB validation effort reduction.',
    tags: ['SQL Server', 'PL-SQL', 'Data Validation'],
    gradient: 'from-accent3 to-accent',
  },
  {
    emoji: '🌐',
    name: 'Selenium POM Framework',
    domain: 'Personal · GitHub',
    desc: 'Personal automation framework with Allure, Qmetry integration, BrowserStack cross-browser testing, and Apache POI data-driving.',
    tags: ['Selenium', 'Allure', 'BrowserStack', 'Apache POI'],
    gradient: 'from-accent to-accent2',
  },
  {
    emoji: '🔥',
    name: 'Performance & Chaos Suite',
    domain: 'BFSI · B2B OMS',
    desc: 'JMeter-based load, stress, and chaos testing validating scalability and SLA compliance under peak load conditions.',
    tags: ['JMeter', 'Chaos Testing', 'Load Testing'],
    gradient: 'from-accent2 to-accent',
  },
  {
    emoji: '🔗',
    name: 'Microservices Event Validator',
    domain: 'Retail · Kroger',
    desc: 'Kafka-based messaging validation ensuring data integrity and event-driven communication accuracy across distributed microservices.',
    tags: ['Kafka', 'Event Validation', 'Microservices'],
    gradient: 'from-accent3 to-accent2',
  },
]

export const services = [
  { icon: '🤖', name: 'Test Automation', desc: 'End-to-end frameworks using Selenium, Playwright, and Karate BDD for web and API.' },
  { icon: '🔌', name: 'API Automation', desc: 'Comprehensive API testing covering REST, Kafka messaging, and microservices validation.' },
  { icon: '🏗️', name: 'Framework Dev', desc: 'Scalable POM frameworks from scratch with reporting, data-driving, and CI/CD hooks.' },
  { icon: '⚙️', name: 'CI/CD Integration', desc: 'Test pipeline integration with Jenkins and GitHub Actions for continuous validation.' },
  { icon: '🗄️', name: 'Database Testing', desc: 'Deep SQL/PL-SQL validation and backend verification for business-critical KPIs.' },
  { icon: '📈', name: 'Performance Testing', desc: 'Load, stress, and chaos testing strategies using JMeter to validate scalability.' },
  { icon: '📋', name: 'QA Strategy', desc: 'Test planning, risk coverage, defect management, and Agile QA process design.' },
  { icon: '🔍', name: 'Quality Consulting', desc: 'QMA assessment, maturity improvement, and cross-functional quality elevation.' },
]

export const stats = [
  { value: 6, label: 'Years Experience', suffix: '+' },
  { value: 90, label: '% Manual Effort Reduced', suffix: '+' },
  { value: 3, label: 'Major Domains', suffix: '+' },
  { value: 80, label: '% DB Validation Cut', suffix: '+' },
]
