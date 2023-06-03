import { z } from "zod";
import MessageDomain from "../types/MessageDomain";

const messageZodSchema: z.ZodType<Pick<MessageDomain, "content">> = z.object({
    content: z.string().nonempty("Mensagem sem conteúdo"),
});

export default messageZodSchema;

export type MessageZodSchema = z.infer<typeof messageZodSchema>;
