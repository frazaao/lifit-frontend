import ScheduleDomain from "../types/ScheduleDomain";
import SchedulePersistence from "../types/SchedulePersistence";
import ScheduleMapper from "../mappers/ScheduleMapper";
import HttpClient from "@/libs/HttpClient/axios";

class SchedulesService {
    prefix = "/api/schedule/";

    // async create(schedule: ScheduleDomain): Promise<ScheduleDomain> {
    //     //
    // }

    // async find(id: string | number): Promise<ScheduleDomain> {
    //     //
    // }

    async getLoggedUserSchedule(): Promise<ScheduleDomain> {
        const { data } = await HttpClient.get<{ data: SchedulePersistence }>(
            this.prefix
        );

        return ScheduleMapper.toDomain(data.data);
    }

    // async update(
    //     id: string | number,
    //     schedule: ScheduleDomain
    // ): Promise<ScheduleDomain> {
    //     //
    // }

    // async delete(id: string | number): Promise<void> {
    //     //
    // }
}

export default new SchedulesService();
