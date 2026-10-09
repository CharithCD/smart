// Ids match the module engines (copied from the prototype's infrastructure logic), so every
// module reads the same values. Never rename an id: it is stored in the database.

export const STAGES = ["idea", "development", "prelaunch", "launched", "scaling"] as const;

export const STAGE_LABELS: Record<string, string> = {
  idea: "Idea / Pre-development",
  development: "Development",
  prelaunch: "Pre-launch",
  launched: "Launched",
  scaling: "Scaling",
};

export const PRODUCT_TYPES = [
  "web",
  "mobile",
  "saas",
  "ecommerce",
  "ai_ml",
  "iot_hardware",
  "other",
] as const;

export const PRODUCT_TYPE_LABELS: Record<string, string> = {
  web: "Web application",
  mobile: "Mobile application",
  saas: "SaaS",
  ecommerce: "E-commerce",
  ai_ml: "AI/ML product",
  iot_hardware: "IoT / Hardware",
  other: "Other",
};

export const OPERATING_MODES = ["office", "hybrid", "remote"] as const;

export const OPERATING_MODE_LABELS: Record<string, string> = {
  office: "In-office",
  hybrid: "Hybrid",
  remote: "Fully remote",
};

export const GEOGRAPHIC_FOCUSES = ["local", "national", "international"] as const;

export const GEOGRAPHIC_FOCUS_LABELS: Record<string, string> = {
  local: "Local",
  national: "National",
  international: "International",
};
