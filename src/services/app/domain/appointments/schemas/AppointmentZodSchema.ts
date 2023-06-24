import { z } from "zod";
import AppointmentDomain from "../types/AppointmentDomain";

const today = new Date().setHours(0, 0, 0, 0);

const appointmentZodSchema: z.ZodType<AppointmentDomain> = z
    .object({
        date: z.coerce.date(),
        // .min(
        //     new Date(today),
        //     "Data inválida, a data precisa ser maior que a data atual"
        // ),
        startTime: z.coerce.string().nonempty("O campo horário é obrigatório"),
        additionalComments: z.coerce.string(),
        nutritionistProfileId: z.coerce.number(),
        patientProfileId: z.coerce.number(),
        status: z.enum(["REQUESTED", "CONFIRMED", "CANCELED"]),
    })
    .refine(
        (appointment) => {
            const [hour, minute, seconds] = appointment.startTime.split(":");
            const appointmentDatetime = new Date(appointment.date);
            appointmentDatetime.setHours(
                Number(hour),
                Number(minute),
                Number(seconds)
            );

            console.log(appointmentDatetime < new Date());

            if (appointmentDatetime < new Date()) {
                return false;
            }

            return true;
        },
        {
            message:
                "O campo horário precisa ser um horário posterior ao horário atual",
            path: ["startTime"],
        }
    );

export default appointmentZodSchema;

export type AppointmentZodSchema = z.infer<typeof appointmentZodSchema>;
