import DefaultFiltersPersistence from "@/services/filters/types/DefaultFiltersPersistence";
import MealRegistryPersistence from "../../types/MealRegistryPersistence";

export default interface MealRegistriesFiltersPersistence
    extends DefaultFiltersPersistence<MealRegistryPersistence> {
    patient_profile_id?: number;
}
