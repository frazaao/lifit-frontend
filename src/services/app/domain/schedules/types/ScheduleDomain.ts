import ScheduleManagementDomain from "../../scheduleManagements/types/ScheduleManagementDomain";
import UnavailabilityDomain from "../../unavailabilities/types/UnavailabilityDomain";

export default interface ScheduleDomain {
    id?: number;
    nutritionistProfileId: number;
    createdBy?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    // Relationships
    scheduleManagements?: ScheduleManagementDomain[];
    unavailabilities?: UnavailabilityDomain[];
}
