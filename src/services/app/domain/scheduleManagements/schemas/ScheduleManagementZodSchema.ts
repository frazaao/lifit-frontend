import { z } from "zod";
import AttendanceDaysEnum from "../enums/AttendanceDaysEnum";
import ScheduleManagementDomain from "../types/ScheduleManagementDomain";

const schedulemanagementZodSchema: z.ZodType<ScheduleManagementDomain> =
    z.object({
        scheduleId: z.coerce.number(),
        attendanceDay: z.nativeEnum(AttendanceDaysEnum),
        attendanceStartTime: z.coerce
            .string()
            .nonempty("O campo horário de início do atendimento é obrigatório"),
        attendanceEndTime: z.coerce
            .string()
            .nonempty(
                "O campo horário de término do atendimento é obrigatório"
            ),
        attendanceDuration: z.coerce.number(),
        breakStartTime: z.coerce.string(),
        breakEndTime: z.coerce.string(),
    });

export default ScheduleManagementZodSchema;

export type ScheduleManagementZodSchema = z.infer<
    typeof schedulemanagementZodSchema
>;
