import ScheduleManagementDomain from "../types/ScheduleManagementDomain";
import ScheduleManagementPersistence from "../types/ScheduleManagementPersistence";
import ScheduleManagementMapper from "../mappers/ScheduleManagementMapper";
import HttpClient from "@/libs/HttpClient/axios";

class ScheduleManagementsService {
    prefix = "/api/schedule_management/";

    async create(schedulemanagement: ScheduleManagementDomain): Promise<void> {
        const scheduleManagementToPersistence =
            ScheduleManagementMapper.toPersistence(schedulemanagement);

        await HttpClient.post(this.prefix, scheduleManagementToPersistence);
    }

    // async find(id: string | number): Promise<ScheduleManagementDomain> {
    //     //
    // }

    async list(): Promise<ScheduleManagementDomain[]> {
        const { data } = await HttpClient.get<{
            data: ScheduleManagementPersistence[];
        }>(this.prefix);

        return data.data.map((scheduleManagement) =>
            ScheduleManagementMapper.toDomain(scheduleManagement)
        );
    }

    // async update(
    //     id: string | number,
    //     schedulemanagement: ScheduleManagementDomain
    // ): Promise<ScheduleManagementDomain> {
    //     //
    // }

    // async delete(id: string | number): Promise<void> {
    //     //
    // }
}

export default new ScheduleManagementsService();
