export default interface BodyRegistryDomain {
    id?: number;
    patientProfileId: number;
    weight: number;
    height: number;
    arterialPressure?: string;
    glycemia?: string;
    cholesterol?: string;
    triglycerides?: string;
    medicationsInUse?: string;
    abdomenCircunference?: number;
    hipCircunference?: number;
    bodyMassIndex?: number;
    registryDate?: Date;
    createdBy?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
