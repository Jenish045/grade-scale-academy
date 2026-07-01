import { ConsultationRequest, SubmissionResult } from "../../types/consultation";
import { validateConsultation } from "./validation";
import { logger } from "../logger";
import { validateEnv, env } from "../env";

/**
 * Executes the type-safe consultation submission pipeline.
 * Coordinates input validation, environment checks, ID generation,
 * and payload formatting for emails and spreadsheet synchronization.
 *
 * DO NOT trigger any external network requests or integrations in this module.
 *
 * @param data Raw input values from the request payload.
 * @returns Object indicating success status, errors, and prepared integration payloads.
 */
export async function submitConsultation(
  data: ConsultationRequest
): Promise<SubmissionResult> {
  try {
    logger.log(`[submitConsultation] Initiating pipeline execution for client: ${data?.name}`);

    // 1. Enforce environment variable check
    validateEnv();

    // 2. Validate and sanitize inputs
    const validation = validateConsultation(data);

    if (!validation.success) {
      logger.warn(`[submitConsultation] Validation checks failed for booking request: ${data?.name}`);
      return {
        success: false,
        errors: validation.errors,
      };
    }

    const lead = validation.data!;
    logger.log(`[submitConsultation] Successfully processed lead. ID assigned: ${lead.id}`);

    // 3. Formulate Resend Email Payload
    const emailHtml = `
      <h2>New Consultation Booking Request</h2>
      <p>A new student consultation profile has been submitted via the website.</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #dee2e6;"><strong>Lead ID:</strong></td><td style="padding: 8px; border: 1px solid #dee2e6;">${lead.id}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #dee2e6;"><strong>Name:</strong></td><td style="padding: 8px; border: 1px solid #dee2e6;">${lead.name}</td></tr>
        <tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #dee2e6;"><strong>Phone:</strong></td><td style="padding: 8px; border: 1px solid #dee2e6;">${lead.phone}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #dee2e6;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #dee2e6;">${lead.email}</td></tr>
        <tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #dee2e6;"><strong>Current City:</strong></td><td style="padding: 8px; border: 1px solid #dee2e6;">${lead.city}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #dee2e6;"><strong>Destination:</strong></td><td style="padding: 8px; border: 1px solid #dee2e6;">${lead.destination}</td></tr>
        <tr style="background-color: #f8f9fa;"><td style="padding: 8px; border: 1px solid #dee2e6;"><strong>Date Requested:</strong></td><td style="padding: 8px; border: 1px solid #dee2e6;">${lead.createdAt.human}</td></tr>
      </table>
      ${lead.message ? `<h3>Additional Notes:</h3><p style="white-space: pre-wrap; font-family: sans-serif; line-height: 1.5;">${lead.message}</p>` : ""}
    `;

    const emailPayload = {
      to: env.BUSINESS_EMAIL,
      from: env.RESEND_FROM_EMAIL,
      subject: `New Study Abroad Consultation - ${lead.name} (${lead.id})`,
      html: emailHtml.trim(),
    };

    // 4. Formulate Google Sheets Row Payload
    const googleSheetPayload = {
      timestamp: lead.createdAt.iso,
      leadId: lead.id,
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      city: lead.city,
      destination: lead.destination,
      message: lead.message,
      status: lead.status,
    };

    logger.log(`[submitConsultation] Transmission payloads successfully prepared for lead: ${lead.id}`);

    return {
      success: true,
      leadId: lead.id,
      emailPayload,
      googleSheetPayload,
    };
  } catch (error) {
    logger.error(`[submitConsultation] Exception caught inside submission pipeline:`, error);
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }
    return {
      success: false,
      error: "An unexpected error occurred during lead processing.",
    };
  }
}

export default submitConsultation;
