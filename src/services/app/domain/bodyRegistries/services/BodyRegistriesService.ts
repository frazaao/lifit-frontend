import BodyRegistryDomain from "../types/BodyRegistryDomain";
import BodyRegistryPersistence from "../types/BodyRegistryPersistence";
import BodyRegistryMapper from "../mappers/BodyRegistryMapper";
import HttpClient from "@/libs/HttpClient/axios";
import PaginationDomain from "@/services/pagination/types/PaginationDomain";
import PaginationMapper from "@/services/pagination/mappers/PaginationMapper";
import PaginationPersistence from "@/services/pagination/types/PaginationPersistence";
import BodyRegistriesFiltersDomain from "../filters/types/BodyRegistriesFiltersDomain";
import BodyRegistriesFiltersMapper from "../filters/mappers/BodyRegistriesFiltersMapper";

class BodyRegistriesService {
    prefix = "/api/body_registry/";

    async create(bodyregistry: BodyRegistryDomain): Promise<void> {
        const bodyRegistryToPersistence =
            BodyRegistryMapper.toPersistence(bodyregistry);

        await HttpClient.post(this.prefix, bodyRegistryToPersistence);
    }

    async find(id: string | number): Promise<BodyRegistryDomain> {
        const { data } = await HttpClient.get<{
            data: BodyRegistryPersistence;
        }>(this.prefix + id);

        const bodyRegistryToDomain = BodyRegistryMapper.toDomain(data.data);

        return bodyRegistryToDomain;
    }

    async list(): Promise<BodyRegistryDomain[]> {
        const { data } = await HttpClient.get<{
            data: BodyRegistryPersistence[];
        }>(this.prefix);

        const bodyRegistriesToDomain = data.data.map((bodyRegistry) =>
            BodyRegistryMapper.toDomain(bodyRegistry)
        );

        return bodyRegistriesToDomain;
    }

    async listPaginated(
        filters: BodyRegistriesFiltersDomain
    ): Promise<PaginationDomain<BodyRegistryDomain[]>> {
        const filtersToPersistence =
            BodyRegistriesFiltersMapper.toPersistence(filters);

        const { data } = await HttpClient.get<
            PaginationPersistence<BodyRegistryPersistence[]>
        >(this.prefix, { params: filtersToPersistence });

        const bodyRegistriesToDomain = data.data.map((bodyRegistry) =>
            BodyRegistryMapper.toDomain(bodyRegistry)
        );

        const paginationToDomain = PaginationMapper.toDomain(data);

        return {
            ...paginationToDomain,
            data: bodyRegistriesToDomain,
        };
    }

    async listByUserId(userId: string | number): Promise<BodyRegistryDomain[]> {
        const { data } = await HttpClient.get<{
            data: BodyRegistryPersistence[];
        }>(this.prefix + "user/" + userId);

        const bodyRegistriesToDomain = data.data.map((bodyRegistry) =>
            BodyRegistryMapper.toDomain(bodyRegistry)
        );

        return bodyRegistriesToDomain;
    }
}

export default new BodyRegistriesService();
