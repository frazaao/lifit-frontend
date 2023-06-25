import BodyRegistryDomain from "../types/BodyRegistryDomain";
import BodyRegistryPersistence from "../types/BodyRegistryPersistence";

class BodyRegistryMapper {
    toDomain(bodyregistry: BodyRegistryPersistence): BodyRegistryDomain {
        return {
            id: bodyregistry.id,
            patientProfileId: bodyregistry.patient_profile_id,
            weight: bodyregistry.weight,
            height: bodyregistry.height,
            arterialPressure: bodyregistry.arterial_pressure,
            glycemia: bodyregistry.glycemia,
            cholesterol: bodyregistry.cholesterol,
            triglycerides: bodyregistry.triglycerides,
            medicationsInUse: bodyregistry.medications_in_use,
            abdomenCircunference: bodyregistry.abdomen_circunference,
            hipCircunference: bodyregistry.hip_circunference,
            bodyMassIndex: bodyregistry.body_mass_index,
            registryDate: bodyregistry.registry_date,
            createdBy: bodyregistry.created_by,
            createdAt: bodyregistry.created_at,
            updatedAt: bodyregistry.updated_at,
            deletedAt: bodyregistry.deleted_at,
        };
    }

    toPersistence(bodyregistry: BodyRegistryDomain): BodyRegistryPersistence {
        return {
            id: bodyregistry.id,
            patient_profile_id: bodyregistry.patientProfileId,
            weight: bodyregistry.weight,
            height: bodyregistry.height,
            arterial_pressure: bodyregistry.arterialPressure,
            glycemia: bodyregistry.glycemia,
            cholesterol: bodyregistry.cholesterol,
            triglycerides: bodyregistry.triglycerides,
            medications_in_use: bodyregistry.medicationsInUse,
            abdomen_circunference: bodyregistry.abdomenCircunference,
            hip_circunference: bodyregistry.hipCircunference,
            body_mass_index: bodyregistry.bodyMassIndex,
            registry_date: bodyregistry.registryDate,
            created_by: bodyregistry.createdBy,
            created_at: bodyregistry.createdAt,
            updated_at: bodyregistry.updatedAt,
            deleted_at: bodyregistry.deletedAt,
        };
    }
}

export default new BodyRegistryMapper();
