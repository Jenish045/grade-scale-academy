import { z } from "zod";
import { VALIDATION_LIMITS } from "../constants";

const limits = VALIDATION_LIMITS;

export const consultationSchema = z.object({
  name: z
    .string()
    .min(limits.NAME.MIN, { message: `Full Name must be at least ${limits.NAME.MIN} characters.` })
    .max(limits.NAME.MAX, { message: `Full Name cannot exceed ${limits.NAME.MAX} characters.` }),
  phone: z
    .string()
    .length(limits.PHONE.LENGTH, { message: `Phone number must be exactly ${limits.PHONE.LENGTH} digits.` })
    .regex(/^[6-9]\d{9}$/, { message: "Invalid Indian mobile number. Must contain exactly 10 digits and start with 6, 7, 8, or 9." }),
  email: z
    .string()
    .min(limits.EMAIL.MIN, { message: "Email address is too short." })
    .max(limits.EMAIL.MAX, { message: "Email address is too long." })
    .email({ message: "Invalid email address format." }),
  city: z
    .string()
    .min(limits.CITY.MIN, { message: `Current City must be at least ${limits.CITY.MIN} characters.` })
    .max(limits.CITY.MAX, { message: `Current City cannot exceed ${limits.CITY.MAX} characters.` }),
  destination: z
    .string()
    .min(limits.DESTINATION.MIN, { message: `Preferred Study Destination must be at least ${limits.DESTINATION.MIN} characters.` })
    .max(limits.DESTINATION.MAX, { message: `Preferred Study Destination cannot exceed ${limits.DESTINATION.MAX} characters.` }),
  message: z
    .string()
    .max(limits.MESSAGE.MAX, { message: `Message cannot exceed ${limits.MESSAGE.MAX} characters.` })
    .optional()
    .or(z.literal("")),
});

export type ConsultationFormValues = z.infer<typeof consultationSchema>;
