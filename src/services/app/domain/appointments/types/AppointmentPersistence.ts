export default interface AppointmentPersistence {
    id?: number;
    date: Date;
    start_time: string;
    additional_comments?: string;
    nutritionist_profile_id: number;
    patient_profile_id: number;
    status: "REQUESTED" | "CONFIRMED" | "CANCELED";
    created_by?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
