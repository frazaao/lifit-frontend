export default interface BodyRegistryPersistence {
    id?: number;
    patient_profile_id: number;
    weight: number;
    height: number;
    arterial_pressure?: string;
    glycemia?: string;
    cholesterol?: string;
    triglycerides?: string;
    medications_in_use?: string;
    abdomen_circunference?: number;
    hip_circunference?: number;
    body_mass_index?: number;
    registry_date?: Date;
    created_by?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
