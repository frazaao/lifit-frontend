import PatientProfileDomain from "../../patientProfiles/types/PatientProfileDomain";

export default interface AppointmentDomain {
    id?: number;
    date: Date;
    startTime: string;
    additionalComments?: string;
    nutritionistProfileId: number;
    patientProfileId: number;
    status: "REQUESTED" | "CONFIRMED" | "CANCELED";
    createdBy?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    //Relationships
    patientProfile?: PatientProfileDomain;
}
