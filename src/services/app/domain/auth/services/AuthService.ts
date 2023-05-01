import HttpClient from "@/libs/HttpClient/axios";
import AuthMapper from "../mappers/AuthMapper";
import AuthDomain from "../types/AuthDomain";

class AuthService {
  async login(credentials: AuthDomain) {
    const credentialsToPersistence = AuthMapper.toPersistence(credentials);

    await HttpClient.post("/api/login", credentialsToPersistence);
  }

  async logout() {
    await HttpClient.get("/api/logout");
  }

  async me() {
    //
  }
}

export default new AuthService();
