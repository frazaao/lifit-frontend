import ScheduleManagementDomain from "../types/ScheduleManagementDomain";
import ScheduleManagementPersistence from "../types/ScheduleManagementPersistence";

class ScheduleManagementMapper {
    toDomain(
        schedulemanagement: ScheduleManagementPersistence
    ): ScheduleManagementDomain {
        return {
            id: schedulemanagement.id,
            scheduleId: schedulemanagement.schedule_id,
            attendanceDay: schedulemanagement.attendance_day,
            attendanceStartTime: schedulemanagement.attendance_start_time,
            attendanceEndTime: schedulemanagement.attendance_end_time,
            attendanceDuration: schedulemanagement.attendance_duration,
            breakStartTime: schedulemanagement.break_start_time,
            breakEndTime: schedulemanagement.break_end_time,
            createdBy: schedulemanagement.created_by,
            createdAt: schedulemanagement.created_at,
            updatedAt: schedulemanagement.updated_at,
            deletedAt: schedulemanagement.deleted_at,
        };
    }

    toPersistence(
        schedulemanagement: ScheduleManagementDomain
    ): ScheduleManagementPersistence {
        return {
            id: schedulemanagement.id,
            schedule_id: schedulemanagement.scheduleId,
            attendance_day: schedulemanagement.attendanceDay,
            attendance_start_time: schedulemanagement.attendanceStartTime,
            attendance_end_time: schedulemanagement.attendanceEndTime,
            attendance_duration: schedulemanagement.attendanceDuration,
            break_start_time: schedulemanagement.breakStartTime,
            break_end_time: schedulemanagement.breakEndTime,
            created_at: schedulemanagement.createdAt,
            updated_at: schedulemanagement.updatedAt,
            deleted_at: schedulemanagement.deletedAt,
        };
    }
}

export default new ScheduleManagementMapper();
