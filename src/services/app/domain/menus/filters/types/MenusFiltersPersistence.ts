import DefaultFiltersPersistence from "@/services/filters/types/DefaultFiltersPersistence";
import MenuPersistence from "../../types/MenuPersistence";

export default interface MenusFiltersPersistence
    extends DefaultFiltersPersistence<MenuPersistence> {
    patient_profile_id?: number;
}
