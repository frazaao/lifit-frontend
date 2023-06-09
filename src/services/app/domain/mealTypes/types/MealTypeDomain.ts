import RecipeDomain from "../../recipes/types/RecipeDomain";

export default interface MealTypeDomain {
    id?: number;
    title: string;
    startTime: string;
    endTime: string;
    createdBy?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    //relationships
    recipes?: RecipeDomain[];
}
