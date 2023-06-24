import { describe, expect, it } from "vitest";
import ScheduleManagementDomain from "../types/ScheduleManagementDomain";
import ScheduleManagementPersistence from "../types/ScheduleManagementPersistence";
import ScheduleManagementMapper from "./ScheduleManagementMapper";

describe("ScheduleManagementMapper", () => {
    it("should return ScheduleManagementDomain when toDomain method is called", () => {
        const schedulemanagementPersistence: ScheduleManagementPersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        const schedulemanagementToDomain = ScheduleManagementMapper.toDomain(schedulemanagementPersistence);

        const schedulemanagementToDomainExpected: ScheduleManagementDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        expect(schedulemanagementToDomain).toMatchObject(schedulemanagementToDomainExpected);
    });

    it("should return ScheduleManagementPersistence when toPersistence method is called", () => {
        const schedulemanagementDomain: ScheduleManagementDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        const schedulemanagementToPersistence =
            ScheduleManagementMapper.toPersistence(schedulemanagementDomain);

        const schedulemanagementToPersistenceExpected: ScheduleManagementPersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        expect(schedulemanagementToPersistence).toMatchObject(
            schedulemanagementToPersistenceExpected
        );
    });
});
