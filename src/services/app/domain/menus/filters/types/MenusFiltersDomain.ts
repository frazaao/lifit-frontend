import DefaultFiltersDomain from "@/services/filters/types/DefaultFiltersDomain";
import MenuPersistence from "../../types/MenuPersistence";

export default interface MenusFiltersDomain
    extends DefaultFiltersDomain<MenuPersistence> {
    patientProfileId?: number;
}
