import AppointmentDomain from "../types/AppointmentDomain";
import AppointmentPersistence from "../types/AppointmentPersistence";
import AppointmentMapper from "../mappers/AppointmentMapper";
import HttpClient from "@/libs/HttpClient/axios";

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
