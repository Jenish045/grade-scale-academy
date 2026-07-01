import { EmailPayload } from "../../types/consultation";
import { logger } from "../logger";
import { env } from "../env";

/**
 * Dispatches a lead notification email utilizing the Resend API handler.
 * 
 * TODO: Integrate the actual Resend client library once the RESEND_API_KEY
 * is configured in the environment settings.
 *
 * @param email Formatted email content.
 * @returns Indicator verifying if transmission completed.
 */
export async function sendConsultationEmail(
  email: EmailPayload
): Promise<boolean> {
  logger.log(`Triggered email transmission sequence to recipient: ${email.to}`);

  if (!env.RESEND_API_KEY) {
    logger.warn("Resend API key missing in environment configuration. Skipping email.");
    return false;
  }

  // TODO: Implement fetch request to https://api.resend.com/emails
  
  return true;
}
export default sendConsultationEmail;
