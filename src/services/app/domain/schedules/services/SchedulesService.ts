import Service from "@/services/app/contracts/Service";
import ScheduleDomain from "../types/ScheduleDomain";
import SchedulePersistence from "../types/SchedulePersistence";
import ScheduleMapper from "../mappers/ScheduleMapper";

class SchedulesService
    implements
        Service<
            ScheduleDomain,
            null,
            null
        >
{
    prefix = "/schedule/";

    async create(schedule: ScheduleDomain): Promise<ScheduleDomain> {
        //
    }

    async find(id: string | number): Promise<ScheduleDomain> {
        //
    }

    async list(): Promise<ScheduleDomain[]> {
        //
    }

    async update(
        id: string | number,
        schedule: ScheduleDomain
    ): Promise<ScheduleDomain> {
        //
    }

    async delete(id: string | number): Promise<void> {
        //
    }
}

export default new SchedulesService();
