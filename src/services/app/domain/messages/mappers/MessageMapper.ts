import UserMapper from "../../users/mappers/UserMapper";
import MessageDomain from "../types/MessageDomain";
import MessagePersistence from "../types/MessagePersistence";

class MessageMapper {
    toDomain(message: MessagePersistence): MessageDomain {
        const recipientToDomain = UserMapper.toDomain(message.recipient);
        const senderToDomain = UserMapper.toDomain(message.sender);

        return {
            id: message.id,
            content: message.content,
            recipient: recipientToDomain,
            recipientId: message.recipient_id,
            sender: senderToDomain,
            senderId: message.sender_id,
            createdBy: message.created_by,
            createdAt: message.created_at,
            updatedAt: message.updated_at,
            deletedAt: message.deleted_at,
        };
    }

    toPersistence(message: MessageDomain): MessagePersistence {
        const recipientToPersistence = UserMapper.toPersistence(
            message.recipient
        );

        const senderToPersistence = UserMapper.toPersistence(message.sender);

        return {
            id: message.id,
            content: message.content,
            recipient: recipientToPersistence,
            recipient_id: message.recipientId,
            sender: senderToPersistence,
            sender_id: message.senderId,
            created_by: message.createdBy,
            created_at: message.createdAt,
            updated_at: message.updatedAt,
            deleted_at: message.deletedAt,
        };
    }
}

export default new MessageMapper();
