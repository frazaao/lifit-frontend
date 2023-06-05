import MealTypeDomain from "../types/MealTypeDomain";
import MealTypePersistence from "../types/MealTypePersistence";
import MealTypeMapper from "../mappers/MealTypeMapper";
import HttpClient from "@/libs/HttpClient/axios";

class MealTypesService {
    prefix = "/meal-type/";

    async create(mealType: MealTypeDomain): Promise<void> {
        const mealTypeToPersistence = MealTypeMapper.toPersistence(mealType);

        await HttpClient.post("/api/meal_type", mealTypeToPersistence);
    }

    async find(id: string | number): Promise<MealTypeDomain> {
        const { data } = await HttpClient.get<{ data: MealTypePersistence }>(
            "/api/meal_type/" + id
        );

        const mealTypeToDomain = MealTypeMapper.toDomain(data.data);

        return mealTypeToDomain;
    }

    async list(): Promise<MealTypeDomain[]> {
        const { data } = await HttpClient.get<{ data: MealTypePersistence[] }>(
            "/api/meal_type"
        );

        const mealTypesToDomain = data.data.map((mealType) =>
            MealTypeMapper.toDomain(mealType)
        );

        return mealTypesToDomain;
    }

    async update(id: string | number, mealType: MealTypeDomain): Promise<void> {
        const mealTypeToPersistence = MealTypeMapper.toPersistence(mealType);

        await HttpClient.put("/api/meal_type/" + id, mealTypeToPersistence);
    }

    async delete(id: string | number): Promise<void> {
        await HttpClient.delete("/api/meal_type/" + id);
    }
}

export default new MealTypesService();
