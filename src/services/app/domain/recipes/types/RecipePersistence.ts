import MealTypePersistence from "../../mealTypes/types/MealTypePersistence";
import MenuPersistence from "../../menus/types/MenuPersistence";
import IngredientPersistence from "./IngredientPersistence";

export default interface RecipePersistence {
    id?: number;
    title: string;
    image_url?: string;
    ingredients: IngredientPersistence[];
    preparation_method: string;
    calories: number;
    meal_type_id?: number;
    created_by?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;

    //Relationships
    meal_type?: MealTypePersistence;
    menus?: MenuPersistence[];
}
