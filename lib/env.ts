import { z } from "zod";
import { ConfigurationError } from "../types/consultation";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().or(z.literal("")),
  RESEND_API_KEY: z.string().or(z.literal("")),
  RESEND_FROM_EMAIL: z.string().or(z.literal("")),
  BUSINESS_EMAIL: z.string().or(z.literal("")),
  GOOGLE_CLIENT_EMAIL: z.string().or(z.literal("")),
  GOOGLE_PRIVATE_KEY: z.string().or(z.literal("")),
  GOOGLE_SHEET_ID: z.string().or(z.literal("")),
});

export type Env = z.infer<typeof envSchema>;

const getEnvValue = (key: keyof Env): string => {
  return process.env[key] || "";
};

const parseEnv = (): Env => {
  const result = envSchema.safeParse({
    NEXT_PUBLIC_SITE_URL: getEnvValue("NEXT_PUBLIC_SITE_URL"),
    RESEND_API_KEY: getEnvValue("RESEND_API_KEY"),
    RESEND_FROM_EMAIL: getEnvValue("RESEND_FROM_EMAIL"),
    BUSINESS_EMAIL: getEnvValue("BUSINESS_EMAIL"),
    GOOGLE_CLIENT_EMAIL: getEnvValue("GOOGLE_CLIENT_EMAIL"),
    GOOGLE_PRIVATE_KEY: getEnvValue("GOOGLE_PRIVATE_KEY"),
    GOOGLE_SHEET_ID: getEnvValue("GOOGLE_SHEET_ID"),
  });

  if (!result.success) {
    console.error("Invalid environment configuration:", result.error.format());
    return {
      NEXT_PUBLIC_SITE_URL: "",
      RESEND_API_KEY: "",
      RESEND_FROM_EMAIL: "",
      BUSINESS_EMAIL: "",
      GOOGLE_CLIENT_EMAIL: "",
      GOOGLE_PRIVATE_KEY: "",
      GOOGLE_SHEET_ID: "",
    };
  }

  return result.data;
};

export const env = parseEnv();

/**
 * Validates that all required environment variables are present and not placeholders.
 * Throws a ConfigurationError if any required key is missing or empty.
 */
export function validateEnv(): void {
  const requiredKeys: (keyof Env)[] = [
    "RESEND_API_KEY",
    "RESEND_FROM_EMAIL",
    "BUSINESS_EMAIL",
    "GOOGLE_CLIENT_EMAIL",
    "GOOGLE_PRIVATE_KEY",
    "GOOGLE_SHEET_ID",
  ];

  for (const key of requiredKeys) {
    const value = env[key];
    if (!value || value.trim() === "" || value.startsWith("YOUR_") || value.includes("PLACEHOLDER")) {
      throw new ConfigurationError(key);
    }
  }
}

export default env;
