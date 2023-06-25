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
}
