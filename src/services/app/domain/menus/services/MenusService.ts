import MenuDomain from "../types/MenuDomain";
import MenuPersistence from "../types/MenuPersistence";
import MenuMapper from "../mappers/MenuMapper";
import HttpClient from "@/libs/HttpClient/axios";
import MenusFiltersDomain from "../filters/types/MenusFiltersDomain";
import PaginationDomain from "@/services/pagination/types/PaginationDomain";
import MenusFiltersMapper from "../filters/mappers/MenusFiltersMapper";
import PaginationPersistence from "@/services/pagination/types/PaginationPersistence";
import PaginationMapper from "@/services/pagination/mappers/PaginationMapper";

class MenusService {
    prefix = "/api/menu/";

    async create(menu: MenuDomain): Promise<void> {
        const menuToDomain = MenuMapper.toPersistence(menu);

        await HttpClient.post(this.prefix, menuToDomain);
    }

    async find(id: string | number): Promise<MenuDomain> {
        const { data } = await HttpClient.get<{ data: MenuPersistence }>(
            this.prefix + id
        );

        return MenuMapper.toDomain(data.data);
    }

    async list(): Promise<MenuDomain[]> {
        const { data } = await HttpClient.get<{ data: MenuPersistence[] }>(
            this.prefix
        );

        return data.data.map((menu) => MenuMapper.toDomain(menu));
    }

    async listPagination(
        filters: MenusFiltersDomain
    ): Promise<PaginationDomain<MenuDomain[]>> {
        const filtersToPersistence = MenusFiltersMapper.toPersistence(filters);

        const { data } = await HttpClient.get<
            PaginationPersistence<MenuPersistence[]>
        >(this.prefix, { params: filtersToPersistence });

        const paginationToDomain = PaginationMapper.toDomain(data);

        const menusToDomain = data.data.map((menu) =>
            MenuMapper.toDomain(menu)
        );

        return {
            ...paginationToDomain,
            data: menusToDomain,
        };
    }

    async findByPatientProfileId(
        patientProfileId: string | number
    ): Promise<MenuDomain> {
        const { data } = await HttpClient.get<{ data: MenuPersistence }>(
            this.prefix + "patient_profile/" + patientProfileId
        );

        return MenuMapper.toDomain(data.data);
    }

    async update(id: string | number, menu: MenuDomain): Promise<void> {
        const menuToDomain = MenuMapper.toPersistence(menu);

        await HttpClient.put(this.prefix + id, menuToDomain);
    }

    async delete(id: string | number): Promise<void> {
        await HttpClient.delete(this.prefix + id);
    }
}

export default new MenusService();
