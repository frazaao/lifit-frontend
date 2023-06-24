import { z } from "zod";
import UnavailabilityDomain from "../types/UnavailabilityDomain";

const unavailabilityZodSchema: z.ZodType<UnavailabilityDomain> = z.object({
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    scheduleId: z.coerce.number(),
});

export default UnavailabilityZodSchema;

export type UnavailabilityZodSchema = z.infer<typeof unavailabilityZodSchema>;
