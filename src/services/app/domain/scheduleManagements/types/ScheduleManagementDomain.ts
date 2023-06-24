import AttendanceDaysEnum from "../enums/AttendanceDaysEnum";

export default interface ScheduleManagementDomain {
    id?: number;
    scheduleId: number;
    attendanceDay: keyof typeof AttendanceDaysEnum;
    attendanceStartTime: string;
    attendanceEndTime: string;
    attendanceDuration: number;
    breakStartTime?: string;
    breakEndTime?: string;
    createdBy?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
