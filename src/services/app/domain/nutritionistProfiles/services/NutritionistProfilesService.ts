import NutritionistProfileDomain from "../types/NutritionistProfileDomain";
import NutritionistProfilePersistence from "../types/NutritionistProfilePersistence";
import NutritionistProfileMapper from "../mappers/NutritionistProfileMapper";
import HttpClient from "@/libs/HttpClient/axios";

class NutritionistProfilesService {
    prefix = "/nutritionist-profile/";

    // async create(
    //     nutritionistProfile: NutritionistProfileDomain
    // ): Promise<NutritionistProfileDomain> {
    //     //
    // }

    async findMyNutritionist() {
        const { data } = await HttpClient.get<{
            data: NutritionistProfilePersistence;
        }>("/api/nutritionist_profile/my");

        const nutritionistProfileToDomain = NutritionistProfileMapper.toDomain(
            data.data
        );

        return nutritionistProfileToDomain;
    }

    async find(id: string | number): Promise<NutritionistProfileDomain> {
        const { data } = await HttpClient.get<{
            data: NutritionistProfilePersistence;
        }>("/nutritionist_profile/" + id);

        const nutritionistProfileToDomain = NutritionistProfileMapper.toDomain(
            data.data
        );

        return nutritionistProfileToDomain;
    }

    // async list(): Promise<NutritionistProfileDomain[]> {
    //     //
    // }

    // async update(
    //     id: string | number,
    //     nutritionistProfile: NutritionistProfileDomain
    // ): Promise<NutritionistProfileDomain> {
    //     //
    // }

    // async delete(id: string | number): Promise<void> {
    //     //
    // }
}

export default new NutritionistProfilesService();
