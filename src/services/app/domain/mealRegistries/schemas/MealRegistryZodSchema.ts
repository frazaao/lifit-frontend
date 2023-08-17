import { z } from "zod";
import MealRegistryDomain from "../types/MealRegistryDomain";

const mealRegistryZodSchema: z.ZodType<MealRegistryDomain> = z
    .object({
        patientProfileId: z.coerce.number(),
        mealTypeId: z.coerce.number(),
        recipeId: z.coerce.number().optional(),
        weight: z.coerce.number().optional(),
        date: z.coerce
            .date()
            .refine(
                (value) => value <= new Date(),
                "O campo data da refeição deve ser uma data anterior à data atual"
            ),
        time: z.coerce.string().transform((value) => value + ":00"),
        additionalComments: z.coerce.string().optional(),
    })
    .refine(
        (mealRegistry) => {
            const [hour, minute] = mealRegistry.time.split(":");

            const mealRegistryDatetime = new Date(mealRegistry.date);
            mealRegistryDatetime.setHours(Number(hour), Number(minute));

            if (mealRegistryDatetime > new Date()) {
                return false;
            }

            return true;
        },
        {
            message:
                "O campo hora da refeição precisa ser um horário anterior ao horário atual",
            path: ["time"],
        }
    );

export default mealRegistryZodSchema;

export type MealRegistryZodSchema = z.infer<typeof mealRegistryZodSchema>;
