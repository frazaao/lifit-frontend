import MealRegistriesFiltersDomain from "../types/MealRegistriesFiltersDomain";
import MealRegistriesFiltersPersistence from "../types/MealRegistriesFiltersPersistence";

class MealRegistriesFiltersMapper {
    toDomain(
        filters: MealRegistriesFiltersPersistence
    ): MealRegistriesFiltersDomain {
        return {
            columnOrder: filters.column_order,
            order: filters.order,
            page: filters.page,
            perPage: filters.per_page,
            patientProfileId: filters.patient_profile_id,
        };
    }

    toPersistence(
        filters: MealRegistriesFiltersDomain
    ): MealRegistriesFiltersPersistence {
        return {
            column_order: filters.columnOrder,
            order: filters.order,
            page: filters.page,
            per_page: filters.perPage,
            patient_profile_id: filters.patientProfileId,
        };
    }
}

export default new MealRegistriesFiltersMapper();
