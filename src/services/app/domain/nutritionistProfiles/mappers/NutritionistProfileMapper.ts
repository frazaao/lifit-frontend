import UserMapper from "../../users/mappers/UserMapper";
import NutritionistProfileDomain from "../types/NutritionistProfileDomain";
import NutritionistProfilePersistence from "../types/NutritionistProfilePersistence";

class NutritionistProfileMapper {
    toDomain(
        nutritionistProfile: NutritionistProfilePersistence
    ): NutritionistProfileDomain {
        const userToDomain = nutritionistProfile.user
            ? UserMapper.toDomain(nutritionistProfile.user)
            : undefined;

        return {
            id: nutritionistProfile.id,
            userId: nutritionistProfile.user_id,
            timeWorkingInIndustry: nutritionistProfile.time_working_in_industry,
            formation: nutritionistProfile.formation,
            biography: nutritionistProfile.biography,
            specialization: nutritionistProfile.specialization,
            createdBy: nutritionistProfile.created_by,
            createdAt: nutritionistProfile.created_at,
            updatedAt: nutritionistProfile.updated_at,
            deletedAt: nutritionistProfile.deleted_at,

            //relationships
            user: userToDomain,
        };
    }

    toPersistence(
        nutritionistProfile: NutritionistProfileDomain
    ): NutritionistProfilePersistence {
        const userToPersistence = nutritionistProfile.user
            ? UserMapper.toPersistence(nutritionistProfile.user)
            : undefined;

        return {
            id: nutritionistProfile.id,
            user_id: nutritionistProfile.userId,
            time_working_in_industry: nutritionistProfile.timeWorkingInIndustry,
            formation: nutritionistProfile.formation,
            biography: nutritionistProfile.biography,
            specialization: nutritionistProfile.specialization,
            created_by: nutritionistProfile.createdBy,
            created_at: nutritionistProfile.createdAt,
            updated_at: nutritionistProfile.updatedAt,
            deleted_at: nutritionistProfile.deletedAt,

            //relationships
            user: userToPersistence,
        };
    }
}

export default new NutritionistProfileMapper();
