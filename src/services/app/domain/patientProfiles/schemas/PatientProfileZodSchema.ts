import { z } from "zod";
import PatientProfileDomain from "../types/PatientProfileDomain";

const patientprofileZodSchema: z.ZodType<Omit<PatientProfileDomain, "userId">> =
    z.object({
        birthDate: z.coerce.date(),
        phoneNumber: z.string().nonempty(),
        gender: z.enum(["MASCULINO", "FEMININO"]),
    });

export default PatientProfileZodSchema;

export type PatientProfileZodSchema = z.infer<typeof patientprofileZodSchema>;
