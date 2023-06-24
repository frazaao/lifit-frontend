import ScheduleManagementMapper from "../../scheduleManagements/mappers/ScheduleManagementMapper";
import UnavailabilityMapper from "../../unavailabilities/mappers/UnavailabilityMapper";
import ScheduleDomain from "../types/ScheduleDomain";
import SchedulePersistence from "../types/SchedulePersistence";

class ScheduleMapper {
    toDomain(schedule: SchedulePersistence): ScheduleDomain {
        const scheduleManagements = schedule.schedule_management?.map(
            (scheduleManagement) =>
                ScheduleManagementMapper.toDomain(scheduleManagement)
        );

        const unavailabilities = schedule.unavailability?.map(
            (unavailability) => UnavailabilityMapper.toDomain(unavailability)
        );

        return {
            id: schedule.id,
            nutritionistProfileId: schedule.nutritionist_profile_id,
            createdBy: schedule.created_by,
            createdAt: schedule.created_at,
            updatedAt: schedule.updated_at,
            deletedAt: schedule.deleted_at,

            // Relationships
            scheduleManagements: scheduleManagements,
            unavailabilities: unavailabilities,
        };
    }

    toPersistence(schedule: ScheduleDomain): SchedulePersistence {
        const scheduleManagements = schedule.scheduleManagements?.map(
            (scheduleManagement) =>
                ScheduleManagementMapper.toPersistence(scheduleManagement)
        );

        const unavailabilities = schedule.unavailabilities?.map(
            (unavailability) =>
                UnavailabilityMapper.toPersistence(unavailability)
        );

        return {
            id: schedule.id,
            nutritionist_profile_id: schedule.nutritionistProfileId,
            created_by: schedule.createdBy,
            created_at: schedule.createdAt,
            updated_at: schedule.updatedAt,
            deleted_at: schedule.deletedAt,

            // Relationships
            schedule_management: scheduleManagements,
            unavailability: unavailabilities,
        };
    }
}

export default new ScheduleMapper();
