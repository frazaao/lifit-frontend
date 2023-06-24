import UnavailabilityDomain from "../types/UnavailabilityDomain";
import UnavailabilityPersistence from "../types/UnavailabilityPersistence";

class UnavailabilityMapper {
    toDomain(unavailability: UnavailabilityPersistence): UnavailabilityDomain {
        return {
            id: unavailability.id,
            startDate: unavailability.start_date,
            endDate: unavailability.end_date,
            scheduleId: unavailability.schedule_id,
            createdBy: unavailability.created_by,
            createdAt: unavailability.created_at,
            updatedAt: unavailability.updated_at,
            deletedAt: unavailability.deleted_at,
        };
    }

    toPersistence(
        unavailability: UnavailabilityDomain
    ): UnavailabilityPersistence {
        return {
            id: unavailability.id,
            start_date: unavailability.startDate,
            end_date: unavailability.endDate,
            schedule_id: unavailability.scheduleId,
            created_by: unavailability.createdBy,
            created_at: unavailability.createdAt,
            updated_at: unavailability.updatedAt,
            deleted_at: unavailability.deletedAt,
        };
    }
}

export default new UnavailabilityMapper();
