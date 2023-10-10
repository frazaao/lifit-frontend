import MealTypeMapper from "../../mealTypes/mappers/MealTypeMapper";
import MealTypeDomain from "../../mealTypes/types/MealTypeDomain";
import MenuMapper from "../../menus/mappers/MenuMapper";
import IngredientDomain from "../types/IngredientDomain";
import IngredientPersistence from "../types/IngredientPersistence";
import RecipeDomain from "../types/RecipeDomain";
import RecipePersistence from "../types/RecipePersistence";

class RecipeMapper {
    toDomain(recipe: RecipePersistence): RecipeDomain {
        const ingredientsToDomain: IngredientDomain[] = recipe.ingredients?.map(
            (ingredient) => ({
                amount: ingredient.amount,
                ingredient: ingredient.ingredient,
                unitType: ingredient.unit_type,
            })
        );

        const mealTypeToDomain = recipe.meal_type
            ? MealTypeMapper.toDomain(recipe.meal_type)
            : undefined;

        const menusToDomain = recipe.menus?.map((menu) =>
            MenuMapper.toDomain(menu)
        );

        return {
            id: recipe.id,
            title: recipe.title,
            imageUrl: recipe.image_url,
            ingredients: ingredientsToDomain,
            preparationMethod: recipe.preparation_method,
            calories: recipe.calories,
            mealTypeId: recipe.meal_type_id,
            createdBy: recipe.created_by,
            createdAt: recipe.created_at,
            updatedAt: recipe.updated_at,
            deletedAt: recipe.deleted_at,

            // Relationships
            mealType: mealTypeToDomain,
            menus: menusToDomain,
        };
    }

    toPersistence(recipe: RecipeDomain): RecipePersistence {
        const ingredientsToPersistence: IngredientPersistence[] =
            recipe.ingredients.map((ingredient) => ({
                amount: ingredient.amount,
                ingredient: ingredient.ingredient,
                unit_type: ingredient.unitType,
            }));

        const mealTypeToPersistence = recipe.mealType
            ? MealTypeMapper.toPersistence(recipe.mealType)
            : undefined;

        const menusToPersistence = recipe.menus?.map((menu) =>
            MenuMapper.toPersistence(menu)
        );

        return {
            id: recipe.id,
            title: recipe.title,
            image_url: recipe.imageUrl,
            ingredients: ingredientsToPersistence,
            preparation_method: recipe.preparationMethod,
            calories: recipe.calories,
            meal_type_id: recipe.mealTypeId,
            created_by: recipe.createdBy,
            created_at: recipe.createdAt,
            updated_at: recipe.updatedAt,
            deleted_at: recipe.deletedAt,

            //Relationships
            meal_type: mealTypeToPersistence,
            menus: menusToPersistence,
        };
    }
}

export default new RecipeMapper();
