import DefaultFiltersPersistence from "@/services/filters/types/DefaultFiltersPersistence";
import AppointmentPersistence from "../../types/AppointmentPersistence";

export default interface AppointmentsFiltersPersistence
    extends DefaultFiltersPersistence<AppointmentPersistence> {
    patient_profile_id?: number;
}
