import { consultationSchema } from "./schema";
import { sanitizeInput } from "../sanitize";
import { ValidatedConsultation, ValidationErrorDetail } from "../../types/consultation";
import { generateProductionLeadId, formatISTTimestamp } from "../utils";
import { LEAD_STATUS } from "../constants";

export interface ValidationOutput {
  success: boolean;
  data?: ValidatedConsultation;
  errors?: ValidationErrorDetail[];
}

/**
 * Sanitizes raw inputs first, then performs schema validation, returning either
 * structured validated parameters or field-specific validation details.
 */
export function validateConsultation(data: unknown): ValidationOutput {
  if (!data || typeof data !== "object") {
    return {
      success: false,
      errors: [{ field: "payload", message: "Invalid form payload structure." }],
    };
  }

  const raw = data as Record<string, unknown>;

  const sanitized = {
    name: sanitizeInput(raw.name as string),
    phone: sanitizeInput(raw.phone as string),
    email: sanitizeInput(raw.email as string),
    city: sanitizeInput(raw.city as string),
    destination: sanitizeInput(raw.destination as string),
    message: raw.message !== undefined && raw.message !== null ? sanitizeInput(raw.message as string) : "",
  };

  const parseResult = consultationSchema.safeParse(sanitized);

  if (!parseResult.success) {
    const formattedErrors: ValidationErrorDetail[] = parseResult.error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));
    return {
      success: false,
      errors: formattedErrors,
    };
  }

  const validated = parseResult.data;
  const now = new Date();

  const validatedConsultation: ValidatedConsultation = {
    id: generateProductionLeadId(now),
    name: validated.name,
    phone: validated.phone,
    email: validated.email.toLowerCase(),
    city: validated.city,
    destination: validated.destination,
    message: validated.message || "",
    status: LEAD_STATUS.NEW,
    createdAt: formatISTTimestamp(now),
  };

  return {
    success: true,
    data: validatedConsultation,
  };
}
