import { describe, expect, it } from "vitest";
import ScheduleDomain from "../types/ScheduleDomain";
import SchedulePersistence from "../types/SchedulePersistence";
import ScheduleMapper from "./ScheduleMapper";

describe("ScheduleMapper", () => {
    it("should return ScheduleDomain when toDomain method is called", () => {
        const schedulePersistence: SchedulePersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        const scheduleToDomain = ScheduleMapper.toDomain(schedulePersistence);

        const scheduleToDomainExpected: ScheduleDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        expect(scheduleToDomain).toMatchObject(scheduleToDomainExpected);
    });

    it("should return SchedulePersistence when toPersistence method is called", () => {
        const scheduleDomain: ScheduleDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        const scheduleToPersistence =
            ScheduleMapper.toPersistence(scheduleDomain);

        const scheduleToPersistenceExpected: SchedulePersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        expect(scheduleToPersistence).toMatchObject(
            scheduleToPersistenceExpected
        );
    });
});
