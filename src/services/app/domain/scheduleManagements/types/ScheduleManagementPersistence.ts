import AttendanceDaysEnum from "../enums/AttendanceDaysEnum";

export default interface ScheduleManagementPersistence {
    id?: number;
    schedule_id: number;
    attendance_day: keyof typeof AttendanceDaysEnum;
    attendance_start_time: string;
    attendance_end_time: string;
    attendance_duration: number;
    break_start_time?: string;
    break_end_time?: string;
    created_by?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
