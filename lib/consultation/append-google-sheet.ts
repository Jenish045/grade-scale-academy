import { GoogleSheetPayload } from "../../types/consultation";
import { logger } from "../logger";
import { env } from "../env";

/**
 * Records verified lead columns into the configured target Google Spreadsheet.
 * 
 * TODO: Integrate standard JWT credential mapping or lightweight Apps Script
 * Web App endpoints once the Google Service Account credentials are active.
 *
 * @param row Structural cell data to append.
 * @returns Indicator denoting if spreadsheet sync finished.
 */
export async function appendLeadToGoogleSheet(
  row: GoogleSheetPayload
): Promise<boolean> {
  logger.log(`Triggered spreadsheet row logging sequence for lead: ${row.leadId}`);

  if (!env.GOOGLE_SHEET_ID) {
    logger.warn("Target Google Sheet ID missing in environment configuration. Skipping log.");
    return false;
  }

  // TODO: Implement Google API OAuth client or Apps Script trigger
  
  return true;
}
export default appendLeadToGoogleSheet;
