import NutritionistProfilePersistence from "../../nutritionistProfiles/types/NutritionistProfilePersistence";
import UserPersistence from "../../users/types/UserPersistence";

export default interface PatientProfilePersistence {
    id?: number;
    user_id: number;
    birth_date: Date;
    phone_number: string;
    gender: "MASCULINO" | "FEMININO";
    allergies?: string;
    aversions?: string;
    preferences?: string;
    health_deseases?: string;
    additional_comments?: string;
    diet_objective?: string;
    nutritionist_profile_id?: number;
    created_by?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;

    //relationships
    user?: UserPersistence;
    nutritionist_profile?: NutritionistProfilePersistence;
    // menu
    // mealRegistry
    // bodyRegistry
}
