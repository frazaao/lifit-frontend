import { z } from "zod";
import BodyRegistryDomain from "../types/BodyRegistryDomain";

const bodyRegistryZodSchema: z.ZodType<BodyRegistryDomain> = z.object({
    patientProfileId: z.coerce.number(),
    weight: z.coerce
        .number()
        .refine((value) => value > 0, "O campo peso é obrigatório")
        .transform((value) => value * 100),
    height: z.coerce
        .number()
        .refine((value) => value > 0, "O campo altura é obrigatório")
        .transform((value) => value * 100),
    arterialPressure: z.coerce.string(),
    glycemia: z.coerce.string(),
    cholesterol: z.coerce.string(),
    triglycerides: z.coerce.string(),
    medicationsInUse: z.coerce.string(),
    abdomenCircunference: z.coerce.number(),
    hipCircunference: z.coerce.number(),
    registryDate: z.coerce.date(),
    bodyMassIndex: z.coerce.number().optional(),
});

export default bodyRegistryZodSchema;

export type BodyRegistryZodSchema = z.infer<typeof bodyRegistryZodSchema>;
