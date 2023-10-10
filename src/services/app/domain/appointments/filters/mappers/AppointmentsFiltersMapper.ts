import DefaultFiltersMapper from "@/services/filters/mappers/DefaultFiltersMapper";
import AppointmentsFiltersDomain from "../types/AppointmentsFiltersDomain";
import AppointmentsFiltersPersistence from "../types/AppointmentsFiltersPersistence";

class AppointmentsFiltersMapper {
    toDomain(
        filters: AppointmentsFiltersPersistence
    ): AppointmentsFiltersDomain {
        const defaultFiltersToDomain = DefaultFiltersMapper.toDomain(filters);

        return {
            ...defaultFiltersToDomain,
            patientProfileId: filters.patient_profile_id,
            columnOrder: filters.column_order,
        };
    }

    toPersistence(
        filters: AppointmentsFiltersDomain
    ): AppointmentsFiltersPersistence {
        const defaultFiltersToPersistence =
            DefaultFiltersMapper.toPersistence(filters);

        return {
            ...defaultFiltersToPersistence,
            patient_profile_id: filters.patientProfileId,
            column_order: filters.columnOrder,
        };
    }
}

export default new AppointmentsFiltersMapper();
