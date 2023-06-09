import { z } from "zod";
import MealTypeDomain from "../types/MealTypeDomain";

const mealtypeZodSchema: z.ZodType<MealTypeDomain> = z.object({
    title: z.string().nonempty(),
    startTime: z.string().nonempty(),
    endTime: z.string().nonempty(),
});

export default MealTypeZodSchema;

export type MealTypeZodSchema = z.infer<typeof mealtypeZodSchema>;
