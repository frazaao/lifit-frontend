import { describe, expect, it } from "vitest";
import AppointmentDomain from "../types/AppointmentDomain";
import AppointmentPersistence from "../types/AppointmentPersistence";
import AppointmentMapper from "./AppointmentMapper";

describe("AppointmentMapper", () => {
    it("should return AppointmentDomain when toDomain method is called", () => {
        const appointmentPersistence: AppointmentPersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        const appointmentToDomain = AppointmentMapper.toDomain(appointmentPersistence);

        const appointmentToDomainExpected: AppointmentDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        expect(appointmentToDomain).toMatchObject(appointmentToDomainExpected);
    });

    it("should return AppointmentPersistence when toPersistence method is called", () => {
        const appointmentDomain: AppointmentDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        const appointmentToPersistence =
            AppointmentMapper.toPersistence(appointmentDomain);

        const appointmentToPersistenceExpected: AppointmentPersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        expect(appointmentToPersistence).toMatchObject(
            appointmentToPersistenceExpected
        );
    });
});
