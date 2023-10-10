import UnavailabilityDomain from "../types/UnavailabilityDomain";
import UnavailabilityPersistence from "../types/UnavailabilityPersistence";
import UnavailabilityMapper from "../mappers/UnavailabilityMapper";
import HttpClient from "@/libs/HttpClient/axios";

class unavailabilitiesService {
    prefix = "/api/unavailability/";

    async create(unavailability: UnavailabilityDomain): Promise<void> {
        const unavailabilityToPersistence =
            UnavailabilityMapper.toPersistence(unavailability);

        await HttpClient.post(this.prefix, unavailabilityToPersistence);
    }

    // async find(id: string | number): Promise<UnavailabilityDomain> {
    //     //
    // }

    async list(): Promise<UnavailabilityDomain[]> {
        const { data } = await HttpClient.get<{
            data: UnavailabilityPersistence[];
        }>(this.prefix);

        return data.data.map((unavailability) =>
            UnavailabilityMapper.toDomain(unavailability)
        );
    }

    // async update(
    //     id: string | number,
    //     unavailability: UnavailabilityDomain
    // ): Promise<UnavailabilityDomain> {
    //     //
    // }

    // async delete(id: string | number): Promise<void> {
    //     //
    // }
}

export default new unavailabilitiesService();
