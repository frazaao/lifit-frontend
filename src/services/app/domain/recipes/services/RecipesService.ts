import RecipeDomain from "../types/RecipeDomain";
import RecipePersistence from "../types/RecipePersistence";
import RecipeMapper from "../mappers/RecipeMapper";
import HttpClient from "@/libs/HttpClient/axios";

class RecipesService {
    prefix = "/recipe/";

    async create(recipe: RecipeDomain): Promise<void> {
        const recipeToPersistence = RecipeMapper.toPersistence(recipe);

        await HttpClient.post("/api/recipe", recipeToPersistence);
    }

    async find(id: string | number): Promise<RecipeDomain> {
        const { data } = await HttpClient.get<{ data: RecipePersistence }>(
            "/api/recipe/" + id
        );

        const recipeToDomain = RecipeMapper.toDomain(data.data);

        return recipeToDomain;
    }

    async list(): Promise<RecipeDomain[]> {
        const { data } = await HttpClient.get<{ data: RecipePersistence[] }>(
            "/api/recipe"
        );

        const recipesToDomain = data.data.map((recipe) =>
            RecipeMapper.toDomain(recipe)
        );

        return recipesToDomain;
    }

    async update(id: string | number, recipe: RecipeDomain): Promise<void> {
        const recipeToPersistence = RecipeMapper.toPersistence(recipe);

        await HttpClient.put<{ data: RecipePersistence }>(
            "/api/recipe/" + id,
            recipeToPersistence
        );
    }

    async delete(id: string | number): Promise<void> {
        await HttpClient.delete<{ data: RecipePersistence }>(
            "/api/recipe/" + id
        );
    }
}

export default new RecipesService();
