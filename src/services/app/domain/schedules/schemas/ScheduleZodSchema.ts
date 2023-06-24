import { z } from "zod";
import ScheduleDomain from "../types/ScheduleDomain";

const scheduleZodSchema: z.ZodType<ScheduleDomain> = z.object({
    nutritionistProfileId: z.number(),
});

export default ScheduleZodSchema;

export type ScheduleZodSchema = z.infer<typeof scheduleZodSchema>;
