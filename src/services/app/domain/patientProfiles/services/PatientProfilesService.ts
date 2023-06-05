import PatientProfileDomain from "../types/PatientProfileDomain";
import PatientProfilePersistence from "../types/PatientProfilePersistence";
import PatientProfileMapper from "../mappers/PatientProfileMapper";
import HttpClient from "@/libs/HttpClient/axios";
import patientProfileZodSchema, {
    PatientProfileZodSchema,
} from "../schemas/PatientProfileZodSchema";

class PatientProfilesService {
    prefix = "/patient-profile/";

    // async create(
    //     patientprofile: PatientProfileDomain
    // ): Promise<PatientProfileDomain> {
    //     //
    // }

    async findMyProfile(): Promise<PatientProfileDomain> {
        const { data } = await HttpClient.get<{
            data: PatientProfilePersistence;
        }>("/api/patient_profile");

        const patientProfileToDomain = PatientProfileMapper.toDomain(data.data);

        return patientProfileToDomain;
    }

    async find(id: string | number): Promise<PatientProfileDomain> {
        const { data } = await HttpClient.get<{
            data: PatientProfilePersistence;
        }>("/api/patient_profile/" + id);

        const patientProfileToDomain = PatientProfileMapper.toDomain(data.data);

        return patientProfileToDomain;
    }

    // async list(): Promise<PatientProfileDomain[]> {
    //     //
    // }

    async updateMyProfile(
        patientProfile: PatientProfileZodSchema
    ): Promise<void> {
        const patientProfileToPersistence =
            PatientProfileMapper.toPersistence(patientProfile);
        await HttpClient.put(
            "/api/patient_profile",
            patientProfileToPersistence
        );
    }

    // async delete(id: string | number): Promise<void> {
    //     //
    // }
}

export default new PatientProfilesService();
