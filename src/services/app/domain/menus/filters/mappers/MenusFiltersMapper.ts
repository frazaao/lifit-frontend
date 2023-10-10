import DefaultFiltersMapper from "@/services/filters/mappers/DefaultFiltersMapper";
import MenusFiltersDomain from "../types/MenusFiltersDomain";
import MenusFiltersPersistence from "../types/MenusFiltersPersistence";

class MenusFiltersMapper {
    toDomain(filters: MenusFiltersPersistence): MenusFiltersDomain {
        const filtersToDomain = DefaultFiltersMapper.toDomain(filters);

        return {
            ...filtersToDomain,
            columnOrder: filters.column_order,
            patientProfileId: filters.patient_profile_id,
        };
    }

    toPersistence(filters: MenusFiltersDomain): MenusFiltersPersistence {
        const filtersToPersistence =
            DefaultFiltersMapper.toPersistence(filters);

        return {
            ...filtersToPersistence,
            column_order: filters.columnOrder,
            patient_profile_id: filters.patientProfileId,
        };
    }
}

export default new MenusFiltersMapper();
