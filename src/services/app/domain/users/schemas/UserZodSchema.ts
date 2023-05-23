import { z } from "zod";
import UserDomain from "../types/UserDomain";

const userZodSchema: z.ZodType<UserDomain> = z.object({
    name: z.string().nonempty(
        "O campo nome é obrigatório"
    ),
    role: z.enum(["ADMIN", "PATIENT", "NUTRITIONIST"]),
    email: z.string().nonempty(
        "O campo email é obrigatório"
    ).email(
        "O campo email é obrigatório"
    )
});

export default UserZodSchema;

export type UserZodSchema = z.infer<typeof userZodSchema>;
