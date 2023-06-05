import { describe, expect, it } from "vitest";
import RecipeDomain from "../types/RecipeDomain";
import RecipePersistence from "../types/RecipePersistence";
import RecipeMapper from "./RecipeMapper";

describe("RecipeMapper", () => {
    it("should return RecipeDomain when toDomain method is called", () => {
        const recipePersistence: RecipePersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        const recipeToDomain = RecipeMapper.toDomain(recipePersistence);

        const recipeToDomainExpected: RecipeDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        expect(recipeToDomain).toMatchObject(recipeToDomainExpected);
    });

    it("should return RecipePersistence when toPersistence method is called", () => {
        const recipeDomain: RecipeDomain = {
            id: 1,
            active: true,
            createdAt: new Date("12-12-12 12:00:00"),
            updatedAt: new Date("12-12-12 12:00:00"),
            deletedAt: new Date("12-12-12 12:00:00"),
        };

        const recipeToPersistence =
            RecipeMapper.toPersistence(recipeDomain);

        const recipeToPersistenceExpected: RecipePersistence = {
            id: 1,
            ativo: true,
            created_at: new Date("12-12-12 12:00:00"),
            updated_at: new Date("12-12-12 12:00:00"),
            deleted_at: new Date("12-12-12 12:00:00"),
        };

        expect(recipeToPersistence).toMatchObject(
            recipeToPersistenceExpected
        );
    });
});
