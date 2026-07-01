export interface ValidationErrorDetail {
  field: string;
  message: string;
}

export class ValidationError extends Error {
  readonly code = "VALIDATION_ERROR";
  readonly details: ValidationErrorDetail[];

  constructor(details: ValidationErrorDetail[]) {
    super("Input validation failed");
    this.name = "ValidationError";
    this.details = details;
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

export class ConfigurationError extends Error {
  readonly code = "CONFIGURATION_ERROR";

  constructor(variableName: string) {
    super(`Required environment configuration missing: ${variableName}`);
    this.name = "ConfigurationError";
    Object.setPrototypeOf(this, ConfigurationError.prototype);
  }
}

export class InternalError extends Error {
  readonly code = "INTERNAL_ERROR";

  constructor(message: string) {
    super(message);
    this.name = "InternalError";
    Object.setPrototypeOf(this, InternalError.prototype);
  }
}

export class UnexpectedError extends Error {
  readonly code = "UNEXPECTED_ERROR";
  readonly originalError?: unknown;

  constructor(message: string, originalError?: unknown) {
    super(message);
    this.name = "UnexpectedError";
    this.originalError = originalError;
    Object.setPrototypeOf(this, UnexpectedError.prototype);
  }
}

export interface ConsultationRequest {
  name: string;
  phone: string;
  email: string;
  city: string;
  destination: string;
  message?: string;
}

export interface ValidatedConsultation {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  destination: string;
  message: string;
  status: string;
  createdAt: {
    iso: string;
    human: string;
    business: string;
  };
}

export interface EmailPayload {
  to: string;
  from: string;
  subject: string;
  html: string;
}

export interface GoogleSheetPayload {
  timestamp: string;
  leadId: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  destination: string;
  message: string;
  status: string;
}

export interface SubmissionResult {
  success: boolean;
  leadId?: string;
  emailPayload?: EmailPayload;
  googleSheetPayload?: GoogleSheetPayload;
  errors?: ValidationErrorDetail[];
  error?: string;
}
