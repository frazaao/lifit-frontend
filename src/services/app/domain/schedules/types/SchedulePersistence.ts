import ScheduleManagementPersistence from "../../scheduleManagements/types/ScheduleManagementPersistence";
import UnavailabilityPersistence from "../../unavailabilities/types/UnavailabilityPersistence";

export default interface SchedulePersistence {
    id?: number;
    nutritionist_profile_id: number;
    created_by?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;

    // Relationships
    schedule_management?: ScheduleManagementPersistence[];
    unavailability?: UnavailabilityPersistence[];
}
