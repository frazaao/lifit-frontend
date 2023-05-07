import { z } from "zod";
import AuthDomain from "../types/AuthDomain";

const authZodSchema: z.ZodType<AuthDomain> = z.object({
    email: z
        .string()
        .nonempty("O campo email não pode estar vazio")
        .email("É necessário um email válido"),

    password: z
        .string()
        .nonempty("O campo senha não pode estar vazio")
        .min(8, "O campo senha deve conter no mínimo 8 caracteres"),
});

export type AuthZodSchema = z.infer<typeof authZodSchema>;

export default authZodSchema;
