import { describe, expect, it } from "vitest";
import MealTypeDomain from "../types/MealTypeDomain";
import MealTypePersistence from "../types/MealTypePersistence";
import MealTypeMapper from "./MealTypeMapper";

describe("MealTypeMapper", () => {
    it("should return MealTypeDomain when toDomain method is called", () => {
        const mealtypePersistence: MealTypePersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        const mealtypeToDomain = MealTypeMapper.toDomain(mealtypePersistence);

        const mealtypeToDomainExpected: MealTypeDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        expect(mealtypeToDomain).toMatchObject(mealtypeToDomainExpected);
    });

    it("should return MealTypePersistence when toPersistence method is called", () => {
        const mealtypeDomain: MealTypeDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        const mealtypeToPersistence =
            MealTypeMapper.toPersistence(mealtypeDomain);

        const mealtypeToPersistenceExpected: MealTypePersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        expect(mealtypeToPersistence).toMatchObject(
            mealtypeToPersistenceExpected
        );
    });
});
