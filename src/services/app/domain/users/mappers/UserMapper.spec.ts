import { describe, expect, it } from "vitest";
import UserDomain from "../types/UserDomain";
import UserPersistence from "../types/UserPersistence";
import UserMapper from "./UserMapper";

describe("UserMapper", () => {
    it("should return UserDomain when toDomain method is called", () => {
        const userPersistence: UserPersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        const userToDomain = UserMapper.toDomain(userPersistence);

        const userToDomainExpected: UserDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        expect(userToDomain).toMatchObject(userToDomainExpected);
    });

    it("should return UserPersistence when toPersistence method is called", () => {
        const userDomain: UserDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        const userToPersistence =
            UserMapper.toPersistence(userDomain);

        const userToPersistenceExpected: UserPersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        expect(userToPersistence).toMatchObject(
            userToPersistenceExpected
        );
    });
});
