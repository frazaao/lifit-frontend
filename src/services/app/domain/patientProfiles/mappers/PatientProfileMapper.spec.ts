import { describe, expect, it } from "vitest";
import PatientProfileDomain from "../types/PatientProfileDomain";
import PatientProfilePersistence from "../types/PatientProfilePersistence";
import PatientProfileMapper from "./PatientProfileMapper";

describe("PatientProfileMapper", () => {
    it("should return PatientProfileDomain when toDomain method is called", () => {
        const patientprofilePersistence: PatientProfilePersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        const patientprofileToDomain = PatientProfileMapper.toDomain(patientprofilePersistence);

        const patientprofileToDomainExpected: PatientProfileDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        expect(patientprofileToDomain).toMatchObject(patientprofileToDomainExpected);
    });

    it("should return PatientProfilePersistence when toPersistence method is called", () => {
        const patientprofileDomain: PatientProfileDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        const patientprofileToPersistence =
            PatientProfileMapper.toPersistence(patientprofileDomain);

        const patientprofileToPersistenceExpected: PatientProfilePersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        expect(patientprofileToPersistence).toMatchObject(
            patientprofileToPersistenceExpected
        );
    });
});
