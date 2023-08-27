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
        };
    }
}

export default new BodyRegistriesFiltersMapper();
