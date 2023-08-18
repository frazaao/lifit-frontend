import RecipeMapper from "../../recipes/mappers/RecipeMapper";
import MealTypeDomain from "../types/MealTypeDomain";
import MealTypePersistence from "../types/MealTypePersistence";

class MealTypeMapper {
    toDomain(mealtype: MealTypePersistence): MealTypeDomain {
        const recipesToDomain = mealtype.recipes?.map((recipe) =>
            RecipeMapper.toDomain(recipe)
        );

        return {
            id: mealtype.id,
            title: mealtype.title,
            startTime: mealtype.start_time,
            endTime: mealtype.end_time,
            createdBy: mealtype.created_by,
            createdAt: mealtype.created_at,
            updatedAt: mealtype.updated_at,
            deletedAt: mealtype.deleted_at,

            //relationships
            recipes: recipesToDomain,
        };
    }

    toPersistence(mealtype: MealTypeDomain): MealTypePersistence {
        const recipesToPersistence = mealtype.recipes?.map((recipe) =>
            RecipeMapper.toPersistence(recipe)
        );

        return {
            id: mealtype.id,
            title: mealtype.title,
            start_time: mealtype.startTime,
            end_time: mealtype.endTime,
            created_by: mealtype.createdBy,
            created_at: mealtype.createdAt,
            updated_at: mealtype.updatedAt,
            deleted_at: mealtype.deletedAt,

            //relationships
            recipes: recipesToPersistence,
        };
    }
}

export default new MealTypeMapper();
