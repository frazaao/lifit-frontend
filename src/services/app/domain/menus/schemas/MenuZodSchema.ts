import { z } from "zod";
import MenuDomain from "../types/MenuDomain";

const menuZodSchema: z.ZodType<MenuDomain> = z.object({
    title: z.string().nonempty("O campo título é obrigatório"),
    patientProfileId: z.coerce.number(),
});

export default MenuZodSchema;

export type MenuZodSchema = z.infer<typeof menuZodSchema>;
