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
  shortName: "Parth Bipinchandra Nirmal",
  firstName: "Parth Bipinchandra",
  lastName: "Nirmal",
  role: "Business Analytics & Information Management",
  seeking: "Product / Project / Program Management — Full-Time",
  location: "Indiana, USA",
  phone: "765-532-7471",
  email: "parthnirmal1912@gmail.com",
  linkedin: "https://www.linkedin.com/in/parth-bipinchandra-nirmal",
  linkedinHandle: "in/parth-bipinchandra-nirmal",
  resumeUrl: "/resume/Parth-Nirmal-Resume.pdf",
  graduation: "December 2026",
  school: "Purdue University",
  headline: {
    lead: "I turn messy data into",
    emphasis: "decisions,",
    tail: "leaders act on.",
  },
  standfirst:
    "Graduate student in Business Analytics and Information Management at Purdue, with hands-on experience transforming complex datasets into executive-ready insights. Most recently, completed a Kearney industry practicum quantifying member value across a 93-pharmacy network.",
  profileBody: [
    "I am a graduate student in Business Analytics and Information Management with hands-on experience transforming complex datasets into executive-ready insights, seeking a Product, Project, or Program Management full-time role in a fast-paced, technology-driven environment.",
    "Highly goal-oriented and motivated, with a passion for delivering innovative ideas and fresh concepts that create value for clients — and a hands-on approach to leveraging AI tools to accelerate analysis and surface insights faster.",
    "Three years of consulting and business analysis across the BFSI and pharmacy sectors taught me the part that matters most: the analysis is only half the job. Framing the problem, validating the data, and landing the story with the people who own the roadmap is the other half.",
  ],
} as const;

/** Compact headline numbers shown in the hero, mirroring the top Impact metrics. */
export const heroHighlights = [
  { value: "$33.9M", label: "Member value quantified" },
  { value: "$870M", label: "Purchasing spend standardized" },
  { value: "93%", label: "Bankruptcy model accuracy" },
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
  logo?: string;
  /** Corporate partner of an academic project — shown distinctly from an employer or client. */
  partner?: string;
  partnerLogo?: string;
  /** Call-to-action shown under the bullets, e.g. a link to a project page. */
  link?: { href: string; label: string };
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
    id: "datamine-jnj",
    org: "The Data Mine, Purdue University",
    logo: "/logos/purdue.png",
    partner: "Johnson & Johnson",
    partnerLogo: "/logos/johnson-johnson.svg",
    title: "Graduate Data Science Researcher",
    period: "August 2026 — Present",
    start: "Aug 2026",
    end: "Present",
    location: "West Lafayette, Indiana",
    current: true,
    summary:
      "Contributing to QSTEPS AI-Enablement, a Purdue Data Mine project with Johnson & Johnson as corporate partner, where I'm helping define and plan improvements to a manual scheduling and coordination workflow as part of the Package Generation team.",
    bullets: [
      {
        lead: "Collaborating with Johnson & Johnson mentors",
        rest: "on the QSTEPS AI-Enablement project as part of the Package Generation team, focused on improving a manual scheduling and coordination workflow.",
      },
      {
        lead: "Authored PRD sections",
        rest: "defining the problem statement, primary user, project scope, and success metrics, giving the team a shared definition of what the project should solve.",
      },
      {
        lead: "Developed TSD sections",
        rest: "covering phased implementation, data and systems touched, and error handling and fallback procedures.",
      },
      {
        lead: "Working in GitHub and Jupyter Notebook",
        rest: "to collaborate on project work with the team.",
      },
    ],
    tags: ["PRD", "TSD", "Scope Definition", "Success Metrics", "GitHub"],
    link: {
      href: "/projects/qsteps-ai-enablement",
      label: "Explore the QSTEPS project",
    },
  },
  {
    id: "kearney",
    org: "Kearney",
    client: "CARE Pharmacies",
    logo: "/logos/kearney.svg",
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
    logo: "/logos/tss-consultancy.png",
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
    logo: "/logos/rns-technology.png",
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
  /** e.g. "In progress" — rendered as a stamp on the card and project page. */
  status?: string;
  /** Link to a dedicated project page, when one exists. */
  href?: string;
  /** false keeps a project out of the Projects section (it can still have a page). */
  listed?: boolean;
  caseStudy?: CaseStudy;
};

export type CaseStudy = {
  /** Short labelled facts for the project page header. */
  facts: { label: string; value: string }[];
  /** Clarifies the relationship with a corporate partner. */
  partnerNote?: string;
  overview: string[];
  problem: string[];
  /** The open questions the problem framing has to answer. */
  problemQuestions?: string[];
  role: string[];
  contributions: {
    id: string;
    label: string;
    title: string;
    purpose: string;
    items: { lead: string; rest: string }[];
  }[];
  teamwork?: string;
  tools: { name: string; use: string }[];
  statusNote: string;
  /** Where the page's back links go; defaults to the Projects section. */
  back?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    id: "qsteps-ai-enablement",
    index: "",
    // Lives under Experience (The Data Mine) rather than in Projects.
    listed: false,
    title: "QSTEPS AI-Enablement",
    subtitle:
      "The Data Mine, Purdue University · Corporate partner: Johnson & Johnson",
    kind: "Data Mine Project",
    period: "August 2026 — Present",
    location: "West Lafayette, Indiana",
    status: "In progress",
    href: "/projects/qsteps-ai-enablement",
    blurb:
      "An ongoing Purdue Data Mine team project, with Johnson & Johnson as corporate partner, focused on improving a scheduling and coordination workflow that is handled manually today. On the Package Generation team, my work so far has centred on defining the problem and specifying how a solution would be built.",
    bullets: [
      "PRD: wrote the problem statement, primary-user definition, project scope, and success metrics.",
      "TSD: wrote the sections covering implementation by phase, data and systems touched, and error handling and fallback.",
      "Working as part of the Package Generation team, using GitHub and Jupyter Notebook during the project.",
    ],
    stack: ["GitHub", "Jupyter Notebook"],
    caseStudy: {
      facts: [
        { label: "Organization", value: "The Data Mine, Purdue University" },
        { label: "Corporate partner", value: "Johnson & Johnson" },
        { label: "Team", value: "Package Generation" },
        { label: "Role", value: "Graduate Data Science Researcher" },
        { label: "Dates", value: "August 2026 — Present" },
        { label: "Tools", value: "GitHub, Jupyter Notebook" },
      ],
      partnerNote:
        "Johnson & Johnson is the corporate partner for this Purdue Data Mine project. I contribute as a Purdue graduate researcher and am not employed by Johnson & Johnson.",
      overview: [
        "QSTEPS AI-Enablement is a team project run through The Data Mine at Purdue University, with Johnson & Johnson as the corporate partner and J&J mentors guiding the work.",
        "The project is focused on improving a scheduling and coordination workflow that is currently carried out manually. The work is organized across teams, and I'm part of the Package Generation team.",
        "The project is ongoing. This page covers my contributions to date and will grow as the work develops.",
      ],
      problem: [
        "At the centre of the project is a scheduling and coordination workflow that is handled manually today.",
        "Before anything gets built, the team needs a clear, shared answer to a few basic questions. Getting those right early is what keeps the rest of the work pointed at the real problem — and that is exactly what the PRD is for.",
      ],
      problemQuestions: [
        "What exactly is the problem with the current workflow?",
        "Who is the primary user we are solving for?",
        "What is in scope — and what is deliberately out of scope?",
        "How will we know the workflow has actually improved?",
      ],
      role: [
        "I'm a Graduate Data Science Researcher on the Package Generation team.",
        "My focus has been the documentation that defines and plans the work — the Product Requirements Document (PRD) and the Technical Specification Document (TSD) — alongside day-to-day collaboration with my team in GitHub and Jupyter Notebook.",
      ],
      contributions: [
        {
          id: "prd",
          label: "PRD",
          title: "Product Requirements Document",
          purpose: "What to solve, and for whom.",
          items: [
            {
              lead: "Problem statement",
              rest: "— what is not working in the current manual workflow, stated plainly enough for the whole team to align on.",
            },
            {
              lead: "Primary-user definition",
              rest: "— who the solution is for, so decisions can be checked against a real person's needs.",
            },
            {
              lead: "Project scope",
              rest: "— what the project covers and what it deliberately leaves out.",
            },
            {
              lead: "Success metrics",
              rest: "— how the team will judge whether the workflow has improved.",
            },
          ],
        },
        {
          id: "tsd",
          label: "TSD",
          title: "Technical Specification Document",
          purpose: "How it would be built, and what happens when things go wrong.",
          items: [
            {
              lead: "Implementation by phase",
              rest: "— how the work is broken into stages that can be delivered one at a time.",
            },
            {
              lead: "Data and systems touched",
              rest: "— which data and systems the solution would need to interact with.",
            },
            {
              lead: "Error handling and fallback",
              rest: "— what should happen when a step fails, so the workflow can keep moving.",
            },
          ],
        },
      ],
      teamwork:
        "All of this happens as part of the Package Generation team, working alongside teammates and J&J mentors rather than in isolation.",
      tools: [
        { name: "GitHub", use: "Collaborating with the team on project work." },
        { name: "Jupyter Notebook", use: "Used for project work during the engagement." },
      ],
      statusNote:
        "Work in progress. This page will be updated as the project develops.",
      back: { href: "/#experience", label: "Back to experience" },
    },
  },
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
      "Product Requirements (PRD, BRD, FRD)",
      "User Stories",
      "Agile / Scrum",
      "Sprint Planning",
      "Backlog Management",
      "Roadmap Prioritization",
      "Risk & Dependency Management",
      "Success Metrics / KPIs",
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
      "Predictive Modeling",
      "Statistical Analysis",
      "ROI Quantification",
      "Data Visualization",
      "Gap Analysis",
      "Root Cause Analysis",
      "Data Validation & Cleaning",
      "Excel Modeling",
    ],
  },
  {
    id: "tools",
    number: "C",
    title: "Tools & Languages",
    skills: [
      "SQL",
      "Python",
      "Excel",
      "Tableau",
      "Power BI",
      "Databricks",
      "GitHub",
      "Jupyter Notebook",
      "Salesforce",
      "AWS",
      "Jira",
      "LightGBM",
      "Cloudflare Workers (D1, KV, Workers AI)",
    ],
  },
  {
    id: "communication",
    number: "D",
    title: "Communication",
    skills: [
      "Stakeholder Management",
      "Executive Reporting",
      "Cross-Functional Leadership",
      "Client Communication",
      "Technical Documentation",
      "Data Storytelling",
    ],
  },
] as const;

export type Education = {
  id: string;
  school: string;
  division: string;
  logo?: string;
  degree: string;
  date: string;
  location: string;
  current?: boolean;
};

export const education: Education[] = [
  {
    id: "purdue",
    school: "Purdue University",
    logo: "/logos/purdue.png",
    division: "Daniels School of Business",
    degree: "Master of Science, Business Analytics and Information Management",
    date: "December 2026",
    location: "West Lafayette, IN",
    current: true,
  },
  {
    id: "mumbai",
    school: "Fr. Conceicao Rodrigues College of Engineering",
    logo: "/logos/frcrce.png",
    division: "University of Mumbai",
    degree: "Bachelor of Engineering, Electronics",
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
