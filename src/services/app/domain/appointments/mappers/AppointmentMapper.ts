import AppointmentDomain from "../types/AppointmentDomain";
import AppointmentPersistence from "../types/AppointmentPersistence";

class AppointmentMapper {
    toDomain(appointment: AppointmentPersistence): AppointmentDomain {
        return {
            id: appointment.id,
            date: appointment.date,
            startTime: appointment.start_time,
            additionalComments: appointment.additional_comments,
            patientProfileId: appointment.patient_profile_id,
            nutritionistProfileId: appointment.nutritionist_profile_id,
            status: appointment.status,
            createdBy: appointment.created_by,
            createdAt: appointment.created_at,
            updatedAt: appointment.updated_at,
            deletedAt: appointment.deleted_at,
        };
    }

    toPersistence(appointment: AppointmentDomain): AppointmentPersistence {
        return {
            id: appointment.id,
            date: appointment.date,
            start_time: appointment.startTime,
            additional_comments: appointment.additionalComments,
            patient_profile_id: appointment.patientProfileId,
            nutritionist_profile_id: appointment.nutritionistProfileId,
            status: appointment.status,
            created_by: appointment.createdBy,
            created_at: appointment.createdAt,
            updated_at: appointment.updatedAt,
            deleted_at: appointment.deletedAt,
        };
    }
}

export default new AppointmentMapper();
