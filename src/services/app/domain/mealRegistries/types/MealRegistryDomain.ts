import MealTypeDomain from "../../mealTypes/types/MealTypeDomain";
import RecipeDomain from "../../recipes/types/RecipeDomain";

export default interface MealRegistryDomain {
    id?: number;
    patientProfileId: number;
    mealTypeId: number;
    recipeId?: number;
    weight?: number;
    date: Date;
    time: string;
    additionalComments?: string;
    createdBy?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    // Relationships
    recipe?: RecipeDomain;
    mealType?: MealTypeDomain;
}
