import { describe, expect, it } from "vitest";
import NutritionistProfileDomain from "../types/NutritionistProfileDomain";
import NutritionistProfilePersistence from "../types/NutritionistProfilePersistence";
import NutritionistProfileMapper from "./NutritionistProfileMapper";

describe("NutritionistProfileMapper", () => {
    it("should return NutritionistProfileDomain when toDomain method is called", () => {
        const nutritionistprofilePersistence: NutritionistProfilePersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        const nutritionistprofileToDomain = NutritionistProfileMapper.toDomain(nutritionistprofilePersistence);

        const nutritionistprofileToDomainExpected: NutritionistProfileDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        expect(nutritionistprofileToDomain).toMatchObject(nutritionistprofileToDomainExpected);
    });

    it("should return NutritionistProfilePersistence when toPersistence method is called", () => {
        const nutritionistprofileDomain: NutritionistProfileDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        const nutritionistprofileToPersistence =
            NutritionistProfileMapper.toPersistence(nutritionistprofileDomain);

        const nutritionistprofileToPersistenceExpected: NutritionistProfilePersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        expect(nutritionistprofileToPersistence).toMatchObject(
            nutritionistprofileToPersistenceExpected
        );
    });
});
