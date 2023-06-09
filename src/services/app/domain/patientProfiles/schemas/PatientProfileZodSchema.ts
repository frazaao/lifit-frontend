import { z } from "zod";
import PatientProfileDomain from "../types/PatientProfileDomain";

const patientProfileZodSchema: z.ZodType<PatientProfileDomain> = z.object({
    userId: z.coerce.number(),
    birthDate: z.coerce.date(),
    phoneNumber: z.string().nonempty(),
    gender: z.enum(["MASCULINO", "FEMININO"]),
    allergies: z.coerce
        .string()
        .optional()
        .transform((value) => (value === "null" ? undefined : value)),
    aversions: z.coerce
        .string()
        .optional()
        .transform((value) => (value === "null" ? undefined : value)),
    preferences: z.coerce
        .string()
        .optional()
        .transform((value) => (value === "null" ? undefined : value)),
    healthDeseases: z.coerce
        .string()
        .optional()
        .transform((value) => (value === "null" ? undefined : value)),
    additionalComments: z.coerce
        .string()
        .optional()
        .transform((value) => (value === "null" ? undefined : value)),
    dietObjective: z.coerce
        .string()
        .optional()
        .transform((value) => (value === "null" ? undefined : value)),
});

export default patientProfileZodSchema;

export type PatientProfileZodSchema = z.infer<typeof patientProfileZodSchema>;
