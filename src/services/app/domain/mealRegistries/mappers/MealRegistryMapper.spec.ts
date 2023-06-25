import { describe, expect, it } from "vitest";
import MealRegistryDomain from "../types/MealRegistryDomain";
import MealRegistryPersistence from "../types/MealRegistryPersistence";
import MealRegistryMapper from "./MealRegistryMapper";

describe("MealRegistryMapper", () => {
    it("should return MealRegistryDomain when toDomain method is called", () => {
        const mealregistryPersistence: MealRegistryPersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        const mealregistryToDomain = MealRegistryMapper.toDomain(mealregistryPersistence);

        const mealregistryToDomainExpected: MealRegistryDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        expect(mealregistryToDomain).toMatchObject(mealregistryToDomainExpected);
    });

    it("should return MealRegistryPersistence when toPersistence method is called", () => {
        const mealregistryDomain: MealRegistryDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        const mealregistryToPersistence =
            MealRegistryMapper.toPersistence(mealregistryDomain);

        const mealregistryToPersistenceExpected: MealRegistryPersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        expect(mealregistryToPersistence).toMatchObject(
            mealregistryToPersistenceExpected
        );
    });
});
