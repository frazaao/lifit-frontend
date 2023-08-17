import MealTypeMapper from "../../mealTypes/mappers/MealTypeMapper";
import RecipeMapper from "../../recipes/mappers/RecipeMapper";
import MealRegistryDomain from "../types/MealRegistryDomain";
import MealRegistryPersistence from "../types/MealRegistryPersistence";

class MealRegistryMapper {
    toDomain(mealregistry: MealRegistryPersistence): MealRegistryDomain {
        const mealTypeToDomain = mealregistry.meal_type
            ? MealTypeMapper.toDomain(mealregistry.meal_type)
            : undefined;

        const recipeToDomain = mealregistry.recipe
            ? RecipeMapper.toDomain(mealregistry.recipe)
            : undefined;

        return {
            id: mealregistry.id,
            patientProfileId: mealregistry.patient_profile_id,
            mealTypeId: mealregistry.meal_type_id,
            recipeId: mealregistry.recipe_id,
            weight: mealregistry.weight,
            date: mealregistry.date,
            time: mealregistry.time,
            additionalComments: mealregistry.additional_comments,
            createdBy: mealregistry.created_by,
            createdAt: mealregistry.created_at,
            updatedAt: mealregistry.updated_at,
            deletedAt: mealregistry.deleted_at,

            // Relationships
            mealType: mealTypeToDomain,
            recipe: recipeToDomain,
        };
    }

    toPersistence(mealregistry: MealRegistryDomain): MealRegistryPersistence {
        const mealTypeToPersistence = mealregistry.mealType
            ? MealTypeMapper.toPersistence(mealregistry.mealType)
            : undefined;

        const recipeToPersistence = mealregistry.recipe
            ? RecipeMapper.toPersistence(mealregistry.recipe)
            : undefined;

        return {
            id: mealregistry.id,
            patient_profile_id: mealregistry.patientProfileId,
            meal_type_id: mealregistry.mealTypeId,
            recipe_id: mealregistry.recipeId,
            weight: mealregistry.weight,
            date: mealregistry.date,
            time: mealregistry.time,
            additional_comments: mealregistry.additionalComments,
            created_by: mealregistry.createdBy,
            created_at: mealregistry.createdAt,
            updated_at: mealregistry.updatedAt,
            deleted_at: mealregistry.deletedAt,

            // Relationships
            meal_type: mealTypeToPersistence,
            recipe: recipeToPersistence,
        };
    }
}

export default new MealRegistryMapper();
