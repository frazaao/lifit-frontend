import DefaultFiltersDomain from "@/services/filters/types/DefaultFiltersDomain";
import AppointmentPersistence from "../../types/AppointmentPersistence";

export default interface AppointmentsFiltersDomain
    extends DefaultFiltersDomain<AppointmentPersistence> {
    patientProfileId?: number;
}
