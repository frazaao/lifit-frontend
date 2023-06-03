import NutritionistProfileDomain from "../../nutritionistProfiles/types/NutritionistProfileDomain";
import UserDomain from "../../users/types/UserDomain";

export default interface PatientProfileDomain {
    id?: number;
    userId: number;
    birthDate: Date;
    phoneNumber: string;
    gender: "MASCULINO" | "FEMININO";
    allergies?: string;
    aversions?: string;
    preferences?: string;
    healthDesesases?: string;
    additionalComments?: string;
    dietObjective?: string;
    nutritionistProfileId?: number;
    createdBy?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    //relationships
    user?: UserDomain;
    nutritionistProfile?: NutritionistProfileDomain;
    // menu
    // mealRegistry
    // bodyRegistry
}
