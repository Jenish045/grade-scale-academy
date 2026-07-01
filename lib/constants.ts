export const SITE_NAME = "Grade Scale Academy";
export const COMPANY_NAME = "Grade Scale Academy";
export const BUSINESS_LOCATION = "Rajkot, Gujarat, India";

export const LEAD_STATUS = {
  NEW: "New",
  CONTACTED: "Contacted",
  VISITED: "Visited",
  CONVERTED: "Converted",
  ARCHIVED: "Archived",
} as const;

export type LeadStatus = typeof LEAD_STATUS[keyof typeof LEAD_STATUS];

export const VALIDATION_LIMITS = {
  NAME: {
    MIN: 2,
    MAX: 100,
  },
  PHONE: {
    LENGTH: 10,
  },
  EMAIL: {
    MIN: 5,
    MAX: 254,
  },
  CITY: {
    MIN: 2,
    MAX: 100,
  },
  DESTINATION: {
    MIN: 2,
    MAX: 150,
  },
  MESSAGE: {
    MAX: 1000,
  },
} as const;

export const RATE_LIMIT = {
  MAX_REQUESTS: 5,
  WINDOW_MS: 60 * 1000, // 1 minute window
} as const;
