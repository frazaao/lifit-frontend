import UserDomain from "../types/UserDomain";
import UserPersistence from "../types/UserPersistence";
import UserMapper from "../mappers/UserMapper";
import HttpClient from "@/libs/HttpClient/axios";

class UsersService {
    prefix = "/api/user/";

    async create(user: UserDomain): Promise<void> {
        const userToPersistence = UserMapper.toPersistence(user);

        await HttpClient.post(this.prefix, userToPersistence);
    }

    async find(id: string | number): Promise<UserDomain> {
        const { data } = await HttpClient.get<{ data: UserPersistence }>(
            this.prefix + id
        );

        const userToDomain = UserMapper.toDomain(data.data);

        return userToDomain;
    }

    async list(): Promise<UserDomain[]> {
        const { data } = await HttpClient.get<{ data: UserPersistence[] }>(
            this.prefix
        );

        const usersToDomain = data.data.map((user) =>
            UserMapper.toDomain(user)
        );

        return usersToDomain;
    }

    async update(id: string | number, user: UserDomain): Promise<void> {
        const userToPersistence = UserMapper.toPersistence(user);

        await HttpClient.put(this.prefix + id, userToPersistence);
    }

    async delete(id: string | number): Promise<void> {
        await HttpClient.delete(this.prefix + id);
    }
}

export default new UsersService();
