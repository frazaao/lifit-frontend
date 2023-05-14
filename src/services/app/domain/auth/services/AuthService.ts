import HttpClient from "@/libs/HttpClient/axios";
import AuthMapper from "../mappers/AuthMapper";
import AuthDomain from "../types/AuthDomain";
import RegisterDomain from "../types/RegisterDomain";
import RegisterMapper from "../mappers/RegisterMapper";
import UserMapper from "../../users/mappers/UserMapper";
import UserPersistence from "../../users/types/UserPersistence";

class AuthService {
    async login(credentials: AuthDomain) {
        const credentialsToPersistence = AuthMapper.toPersistence(credentials);

        await HttpClient.post("/api/login", credentialsToPersistence);
    }

    async register(credentials: RegisterDomain) {
        const credentialsToPersistence = RegisterMapper.toDomain(credentials);

        await HttpClient.post("/api/register", credentialsToPersistence);
    }

    async logout() {
        await HttpClient.get("/api/logout");
    }

    async me() {
        const { data } = await HttpClient.get<UserPersistence>("/api/me");

        const userToDomain = UserMapper.toDomain(data);

        return userToDomain;
    }
}

export default new AuthService();
