import { z } from "zod";
import RegisterDomain from "../types/RegisterDomain";

const registerZodSchema: z.ZodType<RegisterDomain> = z
    .object({
        email: z
            .string()
            .nonempty("O campo email não pode estar vazio")
            .email("O campo email precisa ser um email válido"),
        name: z
            .string()
            .nonempty("O campo nome não pode estar vazio")
            .min(8, "O campo nome deve conter pelo menos 8 caracteres"),
        password: z
            .string()
            .nonempty("O campo senha não pode estar vazio")
            .min(8, "O campo senha deve conter pelo menos 8 caracteres"),
        confirmPassword: z
            .string()
            .nonempty("O campo confirme sua senha não pode estar vazio")
            .min(
                8,
                "O campo confirme sua senha deve conter pelo menos 8 caracteres"
            ),
    })
    .superRefine((values, ctx) => {
        if (values.confirmPassword === values.password) {
            return true;
        }

        return ctx.addIssue({
            message: "As senhas informadas não coincidem",
            path: ["confirmPassword"],
            code: z.ZodIssueCode.custom,
        });
    });

export type RegisterZodSchema = z.infer<typeof registerZodSchema>;

export default registerZodSchema;
