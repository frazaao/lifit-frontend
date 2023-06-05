import RecipePersistence from "../../recipes/types/RecipePersistence";

export default interface MealTypePersistence {
    id?: number;
    title: string;
    created_by?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;

    //relationships
    recipes?: RecipePersistence[];
}
