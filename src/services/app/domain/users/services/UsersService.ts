import Service from "@/services/app/contracts/Service";
import UserDomain from "../types/UserDomain";
import UserPersistence from "../types/UserPersistence";
import UserMapper from "../mappers/UserMapper";

class UsersService
    implements
        Service<
            UserDomain,
            null,
            null
        >
{
    prefix = "/user/";

    async create(user: UserDomain): Promise<UserDomain> {
        //
    }

    async find(id: string | number): Promise<UserDomain> {
        //
    }

    async list(): Promise<UserDomain[]> {
        //
    }

    async update(
        id: string | number,
        user: UserDomain
    ): Promise<UserDomain> {
        //
    }

    async delete(id: string | number): Promise<void> {
        //
    }
}

export default new UsersService();
