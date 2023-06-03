import { z } from "zod";
import NutritionistProfileDomain from "../types/NutritionistProfileDomain";

const nutritionistprofileZodSchema: z.ZodType<
    Omit<NutritionistProfileDomain, "userId">
> = z.object({
    //
});

export default NutritionistProfileZodSchema;

export type NutritionistProfileZodSchema = z.infer<
    typeof nutritionistprofileZodSchema
>;
