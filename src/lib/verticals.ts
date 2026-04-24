export const verticalGroups = [
  {
    name: "AI & Data",
    verticals: [
      "Artificial Intelligence",
      "Machine Learning Infrastructure",
      "Data Infrastructure",
      "Cloud & Compute",
      "Cybersecurity",
      "Developer Tools",
    ],
  },
  {
    name: "Web3 & Crypto",
    verticals: [
      "Blockchain Protocols",
      "DeFi",
      "Stablecoins & Payments",
      "DePIN",
      "Zero-Knowledge & Privacy",
      "Tokenized Real-World Assets",
      "Centralized Exchanges (CEX)",
      "Decentralized Exchanges (DEX)",
    ],
  },
  {
    name: "Deep Tech & Hardware",
    verticals: [
      "Robotics & Automation",
      "Quantum Computing",
      "Defense Tech",
      "Space & Aerospace",
      "Semiconductors & Hardware",
      "IoT & Sensors",
    ],
  },
  {
    name: "Healthcare & Bio",
    verticals: [
      "Healthtech & MedTech",
      "Biotech & Genomics",
      "Mental Health Tech",
      "Longevity & Anti-aging",
      "Diagnostics & Wearables",
      "Pharmatech",
    ],
  },
  {
    name: "Finance & Commerce",
    verticals: [
      "Fintech & Payments",
      "InsurTech",
      "WealthTech",
      "E-Commerce & RetailTech",
      "RegTech & LegalTech",
      "Real Estate Tech",
    ],
  },
  {
    name: "Society & Planet",
    verticals: [
      "CleanTech & Energy",
      "AgriTech & FoodTech",
      "EdTech",
      "Creator Economy & Media",
      "GovTech & CivicTech",
      "Digital Identity & Web3 Social",
      "Community & DAOs",
    ],
  },
];

export const allVerticals = verticalGroups.flatMap((g) => g.verticals);

export const regions = ["Global", "APAC", "MENA", "LATAM", "North America", "Europe", "Africa"];

export const partnerTypes = [
  "Protocol / Infrastructure",
  "Startup (Pre-seed)",
  "Startup (Seed+)",
  "Established Company",
  "Builder / Individual",
];
