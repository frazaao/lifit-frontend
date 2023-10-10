import DefaultFiltersDomain from "@/services/filters/types/DefaultFiltersDomain";
import MealRegistryPersistence from "../../types/MealRegistryPersistence";

export default interface MealRegistriesFiltersDomain
    extends DefaultFiltersDomain<MealRegistryPersistence> {
    patientProfileId?: number;
}
