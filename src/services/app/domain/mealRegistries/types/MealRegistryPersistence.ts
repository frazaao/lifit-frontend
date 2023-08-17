import MealTypePersistence from "../../mealTypes/types/MealTypePersistence";
import RecipePersistence from "../../recipes/types/RecipePersistence";

export default interface MealRegistryPersistence {
    id?: number;
    patient_profile_id: number;
    meal_type_id: number;
    recipe_id?: number;
    weight?: number;
    date: Date;
    time: string;
    additional_comments?: string;
    created_by?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;

    // Relationships
    recipe?: RecipePersistence;
    meal_type?: MealTypePersistence;
}
