import { z } from "zod";
import RecipeDomain from "../types/RecipeDomain";

const recipeZodSchema: z.ZodType<RecipeDomain> = z.object({
    title: z.string(),
    preparationMethod: z.string(),
    calories: z.coerce.number(),
    mealTypeId: z.coerce.number().optional(),
    ingredients: z.array(
        z.object({
            amount: z.coerce.number(),
            ingredient: z.string(),
            unitType: z.enum(["Kg", "g", "L", "ml", "Un"]),
        })
    ),
    imageUrl: z.coerce
        .string()
        .optional()
        .transform((value) => (value === "null" ? undefined : value)),
});

export default RecipeZodSchema;

export type RecipeZodSchema = z.infer<typeof recipeZodSchema>;
