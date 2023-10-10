import MealTypeDomain from "../../mealTypes/types/MealTypeDomain";
import PatientProfileDomain from "../../patientProfiles/types/PatientProfileDomain";
import RecipeDomain from "../../recipes/types/RecipeDomain";

export default interface MenuDomain {
    id?: number;
    title: string;
    patientProfileId: number;
    createdBy?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    //Relationships
    patientProfile?: PatientProfileDomain;
    recipes?: RecipeDomain[];
}
