import { z } from "zod";
import MealRegistryDomain from "../types/MealRegistryDomain";

const mealregistryZodSchema: z.ZodType<MealRegistryDomain> = z.object({
    patientProfileId: z.coerce.number(),
    mealTypeId: z.coerce.number(),
    recipeId: z.coerce.number().optional(),
    weight: z.coerce.number(),
    date: z.coerce.date(),
    time: z.coerce.string(),
    additionalComments: z.coerce.string().optional(),
});

export default MealRegistryZodSchema;

export type MealRegistryZodSchema = z.infer<typeof mealregistryZodSchema>;
