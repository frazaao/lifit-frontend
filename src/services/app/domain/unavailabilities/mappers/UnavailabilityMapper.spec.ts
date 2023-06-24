import { describe, expect, it } from "vitest";
import UnavailabilityDomain from "../types/UnavailabilityDomain";
import UnavailabilityPersistence from "../types/UnavailabilityPersistence";
import UnavailabilityMapper from "./UnavailabilityMapper";

describe("UnavailabilityMapper", () => {
    it("should return UnavailabilityDomain when toDomain method is called", () => {
        const unavailabilityPersistence: UnavailabilityPersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        const unavailabilityToDomain = UnavailabilityMapper.toDomain(unavailabilityPersistence);

        const unavailabilityToDomainExpected: UnavailabilityDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        expect(unavailabilityToDomain).toMatchObject(unavailabilityToDomainExpected);
    });

    it("should return UnavailabilityPersistence when toPersistence method is called", () => {
        const unavailabilityDomain: UnavailabilityDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        const unavailabilityToPersistence =
            UnavailabilityMapper.toPersistence(unavailabilityDomain);

        const unavailabilityToPersistenceExpected: UnavailabilityPersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        expect(unavailabilityToPersistence).toMatchObject(
            unavailabilityToPersistenceExpected
        );
    });
});
