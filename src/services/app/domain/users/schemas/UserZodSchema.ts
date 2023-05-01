import { z } from "zod";
import UserDomain from "../types/UserDomain";

const userZodSchema: z.ZodType<UserDomain> = z.object({
    //
});

export default UserZodSchema;

export type UserZodSchema = z.infer<typeof userZodSchema>;
