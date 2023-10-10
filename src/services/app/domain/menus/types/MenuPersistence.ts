import PatientProfilePersistence from "../../patientProfiles/types/PatientProfilePersistence";
import RecipePersistence from "../../recipes/types/RecipePersistence";

export default interface MenuPersistence {
    id?: number;
    title: string;
    patient_profile_id: number;
    created_by?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;

    //Relationships
    patient_profile?: PatientProfilePersistence;
    recipes?: RecipePersistence[];
}
