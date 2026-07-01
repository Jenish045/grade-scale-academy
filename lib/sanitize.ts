/**
 * Trims leading and trailing whitespace from a string.
 */
export const trimWhitespace = (str: string): string => {
  return str.trim();
};

/**
 * Normalizes newlines in a string to standard LF (\n).
 */
export const normalizeNewlines = (str: string): string => {
  return str.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
};

/**
 * Collapses multiple consecutive spaces/tabs into a single space,
 * and collapses multiple repeated blank lines to a maximum of one blank line.
 */
export const removeExcessiveSpacing = (str: string): string => {
  return str
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s*\n+/g, "\n\n");
};

/**
 * Safely escapes characters that could lead to HTML injection.
 */
export const escapeHtml = (str: string): string => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
};

/**
 * Unified sanitization wrapper for user inputs.
 * Trims, normalizes newlines, collapses spaces, and handles empty/null variables.
 */
export const sanitizeInput = (str: string | null | undefined): string => {
  if (str === null || str === undefined) {
    return "";
  }
  return removeExcessiveSpacing(normalizeNewlines(trimWhitespace(str)));
};
