import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a Date object into various timestamp formats centered around Indian Standard Time (IST).
 */
export function formatISTTimestamp(date: Date) {
  const iso = date.toISOString();

  const humanFormatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const human = `${humanFormatter.format(date)} IST`;

  const businessFormatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const business = businessFormatter.format(date).replace(/\//g, "-");

  return {
    iso,
    human,
    business,
  };
}

/**
 * Generates a production-ready human-readable Lead ID based on an IST date.
 * Format: GSA-YYYYMMDD-XXXX (where XXXX is a random 4-character uppercase alphanumeric string).
 */
export function generateProductionLeadId(date: Date): string {
  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  
  const parts = formatter.formatToParts(date);
  const day = parts.find((p) => p.type === "day")?.value || "01";
  const month = parts.find((p) => p.type === "month")?.value || "01";
  const year = parts.find((p) => p.type === "year")?.value || "2026";
  const dateStr = `${year}${month}${day}`;

  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let suffix = "";
  for (let i = 0; i < 4; i++) {
    suffix += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return `GSA-${dateStr}-${suffix}`;
}

/**
 * Resolves a promise after a designated delay duration.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Wrap async promises into a tuple of [result, error] to minimize try-catch nesting.
 */
export async function safeAsync<T, E = Error>(
  promise: Promise<T>
): Promise<[T, null] | [null, E]> {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error as E];
  }
}
