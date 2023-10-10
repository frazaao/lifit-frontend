import { z } from "zod";
import AttendanceDaysEnum from "../enums/AttendanceDaysEnum";
import ScheduleManagementDomain from "../types/ScheduleManagementDomain";

const scheduleManagementZodSchema: z.ZodType<ScheduleManagementDomain> =
    z.object({
        scheduleId: z.coerce.number(),
        attendanceDay: z.nativeEnum(AttendanceDaysEnum),
        attendanceStartTime: z.coerce
            .string()
            .nonempty("O campo horário de início do atendimento é obrigatório")
            .transform((value) => value + ":00"),
        attendanceEndTime: z.coerce
            .string()
            .nonempty("O campo horário de término do atendimento é obrigatório")
            .transform((value) => value + ":00"),
        attendanceDuration: z.coerce.number(),
        breakStartTime: z.coerce.string().transform((value) => value + ":00"),
        breakEndTime: z.coerce.string().transform((value) => value + ":00"),
    });

export default scheduleManagementZodSchema;

export type ScheduleManagementZodSchema = z.infer<
    typeof scheduleManagementZodSchema
>;
