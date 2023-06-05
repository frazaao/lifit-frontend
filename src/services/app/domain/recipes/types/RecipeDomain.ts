import IngredientDomain from "./IngredientDomain";

export default interface RecipeDomain {
    id?: number;
    title: string;
    imageUrl?: string;
    ingredients: IngredientDomain[];
    preparationMethod: string;
    calories: number;
    mealTypeId?: number;
    createdBy?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
