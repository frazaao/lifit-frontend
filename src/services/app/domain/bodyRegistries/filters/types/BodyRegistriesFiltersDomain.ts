import DefaultFiltersDomain from "@/services/filters/types/DefaultFiltersDomain";
import BodyRegistryPersistence from "../../types/BodyRegistryPersistence";

export default interface BodyRegistriesFiltersDomain
    extends DefaultFiltersDomain<BodyRegistryPersistence> {
    patientProfileId?: number;
}
