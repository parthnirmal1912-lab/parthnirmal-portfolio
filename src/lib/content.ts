/**
 * Single source of truth for every word on the site.
 * Sourced from Parth Bipinchandra Nirmal's resume — edit here, not in components.
 */

/**
 * Canonical origin, no trailing slash. Used for metadata, JSON-LD, the
 * sitemap, and robots.txt — change it here only.
 */
export const siteUrl = "https://parthnirmal.com";

export const profile = {
  name: "Parth Bipinchandra Nirmal",
  shortName: "Parth Nirmal",
  firstName: "Parth",
  lastName: "Nirmal",
  role: "Business Analytics & Information Management",
  seeking: "Product / Project / Program Management Internship",
  location: "Indiana, USA",
  phone: "765-532-7471",
  email: "parthnirmal1912@gmail.com",
  linkedin: "https://www.linkedin.com/in/parth-bipinchandra-nirmal",
  linkedinHandle: "in/parth-bipinchandra-nirmal",
  resumeUrl: "/resume/Parth-Nirmal-Resume.pdf",
  graduation: "December 2026",
  school: "Purdue University",
  headline: [
    "I turn messy",
    "data into",
    "decisions",
    "leaders act on.",
  ],
  standfirst:
    "Graduate student in Business Analytics and Information Management at Purdue, with hands-on experience transforming complex datasets into executive-ready insights. Most recently, completed a Kearney industry practicum quantifying member value across a 93-pharmacy network.",
  profileBody: [
    "I am a graduate student in Business Analytics and Information Management with hands-on experience transforming complex datasets into executive-ready insights, seeking a Product, Project, or Program Management internship in a fast-paced, technology-driven environment.",
    "Highly goal-oriented and motivated, with a passion for delivering innovative ideas and fresh concepts that create value for clients — and a hands-on approach to leveraging AI tools to accelerate analysis and surface insights faster.",
    "Three years of consulting and business analysis across the BFSI and pharmacy sectors taught me the part that matters most: the analysis is only half the job. Framing the problem, validating the data, and landing the story with the people who own the roadmap is the other half.",
  ],
} as const;

/** Ticker tape strip under the hero. */
export const tickerItems = [
  "$33.9M member value quantified",
  "$870M purchasing spend standardized",
  "93 member pharmacies",
  "50+ AML client configurations",
  "2nd of 44 — Kaggle bankruptcy prediction",
  "95% on-time Agile delivery",
  "15+ BRDs & FRDs authored",
  "20% operational efficiency gain",
] as const;

export type ImpactMetric = {
  value: number;
  prefix: string;
  suffix: string;
  decimals: number;
  label: string;
  note: string;
  source: string;
  featured?: boolean;
};

/** Headline numbers — the anchor of the "Impact" section. */
export const impactMetrics: ImpactMetric[] = [
  {
    value: 33.9,
    prefix: "$",
    suffix: "M",
    decimals: 1,
    label: "Total annual member value",
    note: "On-invoice + off-invoice value quantified across 93 member pharmacies from four fragmented quarterly wholesaler datasets.",
    source: "Kearney · CARE Pharmacies",
    featured: true,
  },
  {
    value: 870,
    prefix: "$",
    suffix: "M",
    decimals: 0,
    label: "Annual purchasing spend",
    note: "Brought under one rule-based savings framework standardizing WAC, COGS, and aggregation logic across three agreement types.",
    source: "Kearney · CARE Pharmacies",
  },
  {
    value: 8.8,
    prefix: "$",
    suffix: "M",
    decimals: 1,
    label: "Off-invoice opportunity surfaced",
    note: "Identified a structural gap where independent members capture 50% of value through rebates versus only 12% for group members.",
    source: "Kearney · CARE Pharmacies",
  },
  {
    value: 50,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Clients configured on Trackwizz",
    note: "Led AML product configurations across the BFSI sector, cutting manual compliance review by an estimated 15+ hours per week.",
    source: "TSS Consultancy",
  },
  {
    value: 95,
    prefix: "",
    suffix: "%",
    decimals: 0,
    label: "On-time sprint delivery",
    note: "Maintained across bi-weekly Agile sprints with an 8-member cross-functional development team.",
    source: "TSS Consultancy",
  },
  {
    value: 93,
    prefix: "",
    suffix: "%",
    decimals: 0,
    label: "Bankruptcy model accuracy",
    note: "0.93280 AUC on highly imbalanced financial data using LightGBM — 2nd place out of 44 teams.",
    source: "Purdue · Data Mining",
  },
];

export type Experience = {
  id: string;
  org: string;
  client?: string;
  title: string;
  period: string;
  start: string;
  end: string;
  location: string;
  current?: boolean;
  summary: string;
  bullets: { lead: string; rest: string }[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    id: "kearney",
    org: "Kearney",
    client: "CARE Pharmacies",
    title: "Industry Practicum — Strategy & Analytics Consultant",
    period: "January 2026 — May 2026",
    start: "Jan 2026",
    end: "May 2026",
    location: "West Lafayette, Indiana",
    summary:
      "Sized and standardized the economics of a 93-pharmacy member network so leadership could prioritize a product roadmap against real numbers rather than anecdotes.",
    bullets: [
      {
        lead: "Quantified $33.9M in total annual member value",
        rest: "(on-invoice + off-invoice) across 93 member pharmacies by synthesizing fragmented wholesaler sales data from 4 quarterly datasets, translating findings into executive-ready reports for Kearney and CARE Pharmacies leadership to support product strategy and roadmap prioritization.",
      },
      {
        lead: "Designed a rule-based financial savings framework",
        rest: "standardizing WAC, COGS, and aggregation logic across 3 agreement types and 2 account categories, enabling consistent savings calculation across $870M in annual purchasing spend.",
      },
      {
        lead: "Built data visualizations and user-facing insights",
        rest: "identifying a ~$8.8M off-invoice opportunity for group stores, surfacing a structural gap where independent members receive 50% of value through rebates versus only 12% for group members.",
      },
      {
        lead: "Delivered on-invoice savings analysis",
        rest: "revealing a consistent ~3% savings rate across both member segments despite a 3.4× volume difference, demonstrating that the $15M savings gap is driven by purchase volume, not pricing advantage.",
      },
    ],
    tags: [
      "Financial Modeling",
      "Executive Reporting",
      "Roadmap Prioritization",
      "Data Validation",
      "Excel Modeling",
    ],
  },
  {
    id: "tss",
    org: "TSS Consultancy Pvt. Ltd",
    title: "Associate Business Analyst",
    period: "April 2023 — June 2025",
    start: "Apr 2023",
    end: "Jun 2025",
    location: "Mumbai, Maharashtra",
    summary:
      "Owned requirements and configuration for an AML compliance product across a large client base, working sprint by sprint with an eight-person engineering team.",
    bullets: [
      {
        lead: "Drove analytical insights and AML compliance initiatives",
        rest: "in the BFSI sector, leading Trackwizz AML product configurations for 50+ clients, improving operational efficiency by 20% and reducing manual compliance review time by an estimated 15+ hours per week across client implementations.",
      },
      {
        lead: "Collaborated with an 8-member cross-functional team",
        rest: "to plan and track bi-weekly Agile sprints, removing blockers and maintaining 95% on-time delivery of features aligned with product requirements and timelines.",
      },
      {
        lead: "Authored 15+ BRDs, FRDs, and user stories",
        rest: "in close collaboration with clients, translating business needs into technical requirements and accomplishing a 95% on-time delivery rate across multiple implementations.",
      },
      {
        lead: "Delivered detailed client reports and requirement documentation",
        rest: "with high accuracy, receiving 100% positive client feedback and supporting consistent, on-schedule releases across consecutive sprints.",
      },
    ],
    tags: [
      "Agile Methodology",
      "Requirements Gathering",
      "BRD / FRD",
      "Stakeholder Communication",
      "AML / BFSI",
    ],
  },
  {
    id: "rns",
    org: "RNS Technology Services",
    title: "Associate Technical Consultant",
    period: "October 2022 — April 2023",
    start: "Oct 2022",
    end: "Apr 2023",
    location: "Mumbai, Maharashtra",
    summary:
      "Advised clients on digital identity management, shaping access strategy in a threat landscape where the cost of getting it wrong is measured in breaches.",
    bullets: [
      {
        lead: "Provided expert consulting to 12+ clients",
        rest: "on digital identity management, enhancing security and efficiency while guiding strategy design to mitigate access and misuse risks.",
      },
      {
        lead: "Enhanced security and operational resilience",
        rest: "for clients, enabling them to protect sensitive data and assets in a dynamic threat landscape, reducing security breaches by 25%.",
      },
    ],
    tags: [
      "Digital Identity",
      "Client Advisory",
      "Strategy Design",
      "Risk Mitigation",
    ],
  },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  kind: string;
  period: string;
  location: string;
  blurb: string;
  bullets: string[];
  stack: string[];
  accolade?: string;
};

export const projects: Project[] = [
  {
    id: "feedbacklens",
    index: "01",
    title: "FeedbackLens",
    subtitle: "Sentiment + Theme Analytics Dashboard",
    kind: "Personal Project",
    period: "January 2026",
    location: "West Lafayette, Indiana",
    blurb:
      "An edge-deployed dashboard that aggregates product feedback from multiple sources and enriches every entry with AI-generated sentiment, themes, and ratings — so prioritization starts from signal, not a spreadsheet of raw comments.",
    bullets: [
      "Built and deployed a Cloudflare Workers feedback aggregation dashboard with D1 persistence, enabling real-time submission, search, filtering, and interactive analytics for multi-source product feedback.",
      "Integrated Workers AI to automatically enrich feedback with sentiment, summaries, theme tags, and star ratings (with fallback prediction), improving prioritization and insight extraction while aligning with responsible AI practices.",
      "Revamped performance and UX with Workers KV plus edge caching and cache invalidation, along with a mobile-responsive UI and clear interactive filtering and highlighting across charts and lists.",
    ],
    stack: [
      "Cloudflare Workers",
      "D1",
      "Workers KV",
      "Workers AI",
      "Edge Caching",
    ],
  },
  {
    id: "bankruptcy",
    index: "02",
    title: "Bankruptcy Prediction",
    subtitle: "Kaggle Competition — Data Mining, Purdue University",
    kind: "Academic Project",
    period: "November 2025 — December 2025",
    location: "West Lafayette, Indiana",
    accolade: "2nd of 44 teams",
    blurb:
      "A gradient-boosted classifier for corporate bankruptcy on severely imbalanced financial data, where the gains came from financial-ratio feature engineering rather than model swapping.",
    bullets: [
      "Ranked 2nd out of 44 teams in a Kaggle bankruptcy prediction competition, achieving 93% accuracy (0.93280 AUC) on highly imbalanced financial data using LightGBM.",
      "Improved model performance by ~12% over baseline through feature engineering, financial ratios, polynomial features, and Optuna-based hyperparameter tuning.",
    ],
    stack: ["Python", "LightGBM", "Optuna", "Feature Engineering"],
  },
];

export const skillGroups = [
  {
    id: "delivery",
    number: "A",
    title: "Product & Delivery",
    skills: [
      "Agile Methodology",
      "Requirements Gathering",
      "Business Problem Framing",
      "Structured Problem Solving",
      "Analytical Framework Development",
      "Strategic Thinking",
    ],
  },
  {
    id: "analytics",
    number: "B",
    title: "Analytics & Modeling",
    skills: [
      "Data Analysis",
      "Financial Modeling",
      "ROI Quantification",
      "Data Validation & Cleaning",
      "Excel Modeling",
    ],
  },
  {
    id: "tools",
    number: "C",
    title: "Tools & Languages",
    skills: ["SQL", "Python", "Tableau", "Power BI", "Excel"],
  },
  {
    id: "communication",
    number: "D",
    title: "Communication",
    skills: [
      "Stakeholder Communication",
      "Executive Reporting",
      "Cross-functional Collaboration",
    ],
  },
] as const;

export type Education = {
  id: string;
  school: string;
  division: string;
  degree: string;
  gpa: string;
  date: string;
  location: string;
  current?: boolean;
};

export const education: Education[] = [
  {
    id: "purdue",
    school: "Purdue University",
    division: "Daniels School of Business",
    degree: "Master of Science, Business Analytics and Information Management",
    gpa: "3.5 / 4.0",
    date: "December 2026",
    location: "West Lafayette, IN",
    current: true,
  },
  {
    id: "mumbai",
    school: "Fr. Conceicao Rodrigues College of Engineering",
    division: "University of Mumbai",
    degree: "Bachelor of Engineering, Electronics",
    gpa: "3.2 / 4.0",
    date: "May 2022",
    location: "Mumbai, Maharashtra",
  },
];

export const targetRoles = [
  "Product Management",
  "Project Management",
  "Program Management",
  "Strategy & Analytics",
] as const;

export const sections = [
  { id: "top", index: "00", label: "Cover" },
  { id: "profile", index: "01", label: "Profile" },
  { id: "impact", index: "02", label: "Impact" },
  { id: "experience", index: "03", label: "Experience" },
  { id: "projects", index: "04", label: "Projects" },
  { id: "capabilities", index: "05", label: "Capabilities" },
  { id: "education", index: "06", label: "Education" },
  { id: "contact", index: "07", label: "Contact" },
] as const;
