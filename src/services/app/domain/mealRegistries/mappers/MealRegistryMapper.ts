import MealRegistryDomain from "../types/MealRegistryDomain";
import MealRegistryPersistence from "../types/MealRegistryPersistence";

class MealRegistryMapper {
    toDomain(mealregistry: MealRegistryPersistence): MealRegistryDomain {
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
        };
    }

    toPersistence(mealregistry: MealRegistryDomain): MealRegistryPersistence {
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
        };
    }
}

export default new MealRegistryMapper();
