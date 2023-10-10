import AppointmentDomain from "../types/AppointmentDomain";
import AppointmentPersistence from "../types/AppointmentPersistence";
import AppointmentMapper from "../mappers/AppointmentMapper";
import HttpClient from "@/libs/HttpClient/axios";
import AppointmentsFiltersPersistence from "../filters/types/AppointmentsFiltersPersistence";
import PaginationDomain from "@/services/pagination/types/PaginationDomain";
import PaginationPersistence from "@/services/pagination/types/PaginationPersistence";
import PaginationMapper from "@/services/pagination/mappers/PaginationMapper";

class AppointmentsService {
    prefix = "/api/appointment/";

    async create(appointment: AppointmentDomain): Promise<void> {
        const appointmentToPersistence =
            AppointmentMapper.toPersistence(appointment);
        await HttpClient.post("/api/appointment/", appointmentToPersistence);
    }

    async find(id: string | number): Promise<AppointmentDomain> {
        const { data } = await HttpClient.get<{ data: AppointmentPersistence }>(
            "/api/appointment/" + id
        );

        const appointmentToDomain = AppointmentMapper.toDomain(data.data);

        return appointmentToDomain;
    }

    async list(): Promise<AppointmentDomain[]> {
        const { data } = await HttpClient.get<{
            data: AppointmentPersistence[];
        }>("/api/appointment/");

        const appointmentsToDomain = data.data.map((appointment) =>
            AppointmentMapper.toDomain(appointment)
        );

        return appointmentsToDomain;
    }

    async listPaginated(
        filters?: AppointmentsFiltersPersistence
    ): Promise<PaginationDomain<AppointmentDomain[]>> {
        const { data } = await HttpClient.get<
            PaginationPersistence<AppointmentPersistence[]>
        >("/api/appointment/", {
            params: filters,
        });

        const paginationToDomain = PaginationMapper.toDomain(data);

        const appointmentsToDomain = data.data.map((appointment) =>
            AppointmentMapper.toDomain(appointment)
        );

        return {
            ...paginationToDomain,
            data: appointmentsToDomain,
        };
    }

    // async update(
    //     id: string | number,
    //     appointment: AppointmentDomain
    // ): Promise<AppointmentDomain> {
    //     //
    // }

    // async delete(id: string | number): Promise<void> {
    //     //
    // }
}

export default new AppointmentsService();
