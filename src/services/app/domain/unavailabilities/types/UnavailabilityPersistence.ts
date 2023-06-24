export default interface UnavailabilityPersistence {
    id?: number;
    start_date: Date;
    end_date: Date;
    schedule_id: number;
    created_by?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
