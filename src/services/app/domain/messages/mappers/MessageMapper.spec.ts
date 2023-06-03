import { describe, expect, it } from "vitest";
import MessageDomain from "../types/MessageDomain";
import MessagePersistence from "../types/MessagePersistence";
import MessageMapper from "./MessageMapper";

describe("MessageMapper", () => {
    it("should return MessageDomain when toDomain method is called", () => {
        const messagePersistence: MessagePersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        const messageToDomain = MessageMapper.toDomain(messagePersistence);

        const messageToDomainExpected: MessageDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        expect(messageToDomain).toMatchObject(messageToDomainExpected);
    });

    it("should return MessagePersistence when toPersistence method is called", () => {
        const messageDomain: MessageDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        const messageToPersistence =
            MessageMapper.toPersistence(messageDomain);

        const messageToPersistenceExpected: MessagePersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        expect(messageToPersistence).toMatchObject(
            messageToPersistenceExpected
        );
    });
});
