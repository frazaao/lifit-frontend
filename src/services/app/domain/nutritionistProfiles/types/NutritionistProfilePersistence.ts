import UserPersistence from "../../users/types/UserPersistence";

export default interface NutritionistProfilePersistence {
    id?: number;
    user_id: number;
    time_working_in_industry?: number;
    formation?: string;
    biography?: string;
    specialization?: string;
    created_by?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;

    //relationships
    user?: UserPersistence;
}
