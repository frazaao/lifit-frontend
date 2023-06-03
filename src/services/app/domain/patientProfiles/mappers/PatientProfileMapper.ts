import NutritionistProfileMapper from "../../nutritionistProfiles/mappers/NutritionistProfileMapper";
import UserMapper from "../../users/mappers/UserMapper";
import PatientProfileDomain from "../types/PatientProfileDomain";
import PatientProfilePersistence from "../types/PatientProfilePersistence";

class PatientProfileMapper {
    toDomain(patientprofile: PatientProfilePersistence): PatientProfileDomain {
        const userToDomain = patientprofile.user
            ? UserMapper.toDomain(patientprofile.user)
            : undefined;

        const nutritionistProfileToDomain = patientprofile.nutritionist_profile
            ? NutritionistProfileMapper.toDomain(
                  patientprofile.nutritionist_profile
              )
            : undefined;

        return {
            id: patientprofile.id,
            userId: patientprofile.user_id,
            birthDate: patientprofile.birth_date,
            phoneNumber: patientprofile.phone_number,
            gender: patientprofile.gender,
            allergies: patientprofile.allergies,
            aversions: patientprofile.aversions,
            preferences: patientprofile.preferences,
            healthDesesases: patientprofile.health_desesases,
            additionalComments: patientprofile.additional_comments,
            dietObjective: patientprofile.diet_objective,
            nutritionistProfileId: patientprofile.nutritionist_profile_id,
            createdBy: patientprofile.created_by,
            createdAt: patientprofile.created_at,
            updatedAt: patientprofile.updated_at,
            deletedAt: patientprofile.deleted_at,

            //relationships
            user: userToDomain,
            nutritionistProfile: nutritionistProfileToDomain,
        };
    }

    toPersistence(
        patientprofile: PatientProfileDomain
    ): PatientProfilePersistence {
        const userToPersistence = patientprofile.user
            ? UserMapper.toPersistence(patientprofile.user)
            : undefined;

        const nutritionistProfileToPersistence =
            patientprofile.nutritionistProfile
                ? NutritionistProfileMapper.toPersistence(
                      patientprofile.nutritionistProfile
                  )
                : undefined;

        return {
            id: patientprofile.id,
            user_id: patientprofile.userId,
            birth_date: patientprofile.birthDate,
            phone_number: patientprofile.phoneNumber,
            gender: patientprofile.gender,
            allergies: patientprofile.allergies,
            aversions: patientprofile.aversions,
            preferences: patientprofile.preferences,
            health_desesases: patientprofile.healthDesesases,
            additional_comments: patientprofile.additionalComments,
            diet_objective: patientprofile.dietObjective,
            nutritionist_profile_id: patientprofile.nutritionistProfileId,
            created_by: patientprofile.createdBy,
            created_at: patientprofile.createdAt,
            updated_at: patientprofile.updatedAt,
            deleted_at: patientprofile.deletedAt,

            //relationships
            user: userToPersistence,
            nutritionist_profile: nutritionistProfileToPersistence,
        };
    }
}

export default new PatientProfileMapper();
