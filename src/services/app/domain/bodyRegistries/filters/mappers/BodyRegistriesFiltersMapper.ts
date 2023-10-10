import DefaultFiltersMapper from "@/services/filters/mappers/DefaultFiltersMapper";
import BodyRegistriesFiltersDomain from "../types/BodyRegistriesFiltersDomain";
import BodyRegistriesFiltersPersistence from "../types/BodyRegistriesFiltersPersistence";

class BodyRegistriesFiltersMapper {
    toDomain(
        filters: BodyRegistriesFiltersPersistence
    ): BodyRegistriesFiltersDomain {
        const defaultFiltersToDomain = DefaultFiltersMapper.toDomain(filters);

        return {
            ...defaultFiltersToDomain,
            columnOrder: filters.column_order,
            patientProfileId: filters.patient_profile_id,
        };
    }

    toPersistence(
        filters: BodyRegistriesFiltersDomain
    ): BodyRegistriesFiltersPersistence {
        const defaultFiltersToPersistence =
            DefaultFiltersMapper.toPersistence(filters);

        return {
            ...defaultFiltersToPersistence,
            column_order: filters.columnOrder,
            patient_profile_id: filters.patientProfileId,
        };
    }
}

export default new BodyRegistriesFiltersMapper();
