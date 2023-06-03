import MessageDomain from "../types/MessageDomain";
import MessagePersistence from "../types/MessagePersistence";
import MessageMapper from "../mappers/MessageMapper";
import HttpClient from "@/libs/HttpClient/axios";
import { MessageZodSchema } from "../schemas/MessageZodSchema";

class MessagesService {
    prefix = "/message/";

    async create(
        message: MessageZodSchema,
        recipientId: number
    ): Promise<void> {
        await HttpClient.post("/api/message/" + recipientId, message);
    }

    async list(): Promise<MessageDomain[]> {
        const { data } = await HttpClient.get<{ data: MessagePersistence[] }>(
            "/api/message"
        );

        const messagesToDomain = data.data.map((message) =>
            MessageMapper.toDomain(message)
        );

        return messagesToDomain;
    }
}

export default new MessagesService();
