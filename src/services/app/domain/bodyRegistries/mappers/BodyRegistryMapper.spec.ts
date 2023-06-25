import { describe, expect, it } from "vitest";
import BodyRegistryDomain from "../types/BodyRegistryDomain";
import BodyRegistryPersistence from "../types/BodyRegistryPersistence";
import BodyRegistryMapper from "./BodyRegistryMapper";

describe("BodyRegistryMapper", () => {
    it("should return BodyRegistryDomain when toDomain method is called", () => {
        const bodyregistryPersistence: BodyRegistryPersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        const bodyregistryToDomain = BodyRegistryMapper.toDomain(bodyregistryPersistence);

        const bodyregistryToDomainExpected: BodyRegistryDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        expect(bodyregistryToDomain).toMatchObject(bodyregistryToDomainExpected);
    });

    it("should return BodyRegistryPersistence when toPersistence method is called", () => {
        const bodyregistryDomain: BodyRegistryDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        const bodyregistryToPersistence =
            BodyRegistryMapper.toPersistence(bodyregistryDomain);

        const bodyregistryToPersistenceExpected: BodyRegistryPersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        expect(bodyregistryToPersistence).toMatchObject(
            bodyregistryToPersistenceExpected
        );
    });
});
