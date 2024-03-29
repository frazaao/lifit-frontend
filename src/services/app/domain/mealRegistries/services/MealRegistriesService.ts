import MealRegistryDomain from "../types/MealRegistryDomain";
import MealRegistryPersistence from "../types/MealRegistryPersistence";
import MealRegistryMapper from "../mappers/MealRegistryMapper";
import HttpClient from "@/libs/HttpClient/axios";
import MealRegistriesFiltersDomain from "../filters/types/MealRegistriesFiltersDomain";
import MealRegistriesFiltersMapper from "../filters/mapper/MealRegistriesFiltersMapper";
import PaginationPersistence from "@/services/pagination/types/PaginationPersistence";
import PaginationMapper from "@/services/pagination/mappers/PaginationMapper";
import PaginationDomain from "@/services/pagination/types/PaginationDomain";

class MealRegistriesService {
    prefix = "/api/meal_registry/";

    async create(mealregistry: MealRegistryDomain): Promise<void> {
        const mealregistryPersistence =
            MealRegistryMapper.toPersistence(mealregistry);

        await HttpClient.post(this.prefix, mealregistryPersistence);
    }

    async find(id: string | number): Promise<MealRegistryDomain> {
        const { data } = await HttpClient.get<{
            data: MealRegistryPersistence;
        }>(this.prefix + id);

        return MealRegistryMapper.toDomain(data.data);
    }

    async list(): Promise<MealRegistryDomain[]> {
        const { data } = await HttpClient.get<{
            data: MealRegistryPersistence[];
        }>(this.prefix);

        return data.data.map((mealregistry) =>
            MealRegistryMapper.toDomain(mealregistry)
        );
    }

    async listPaginated(
        filters: MealRegistriesFiltersDomain
    ): Promise<PaginationDomain<MealRegistryDomain[]>> {
        const filtersToPersistence =
            MealRegistriesFiltersMapper.toPersistence(filters);

        const { data } = await HttpClient.get<
            PaginationPersistence<MealRegistryPersistence[]>
        >(this.prefix, { params: filtersToPersistence });

        const mealRegistriesToDomain = data.data.map((mealregistry) => {
            return MealRegistryMapper.toDomain(mealregistry);
        });

        const paginationToDomain = PaginationMapper.toDomain(data);

        return {
            ...paginationToDomain,
            data: mealRegistriesToDomain,
        };
    }

    async update(
        id: string | number,
        mealregistry: MealRegistryDomain
    ): Promise<void> {
        const mealregistryPersistence =
            MealRegistryMapper.toPersistence(mealregistry);

        await HttpClient.put(this.prefix + id, mealregistryPersistence);
    }

    async delete(id: string | number): Promise<void> {
        await HttpClient.delete(this.prefix + id);
    }
}

export default new MealRegistriesService();
