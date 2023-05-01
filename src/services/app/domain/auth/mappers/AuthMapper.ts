import AuthDomain from "../types/AuthDomain";
import AuthPersistence from "../types/AuthPersistence";

class AuthMapper {
  toDomain(credentials: AuthPersistence): AuthDomain {
    return {
      email: credentials.email,
      password: credentials.password,
    };
  }

  toPersistence(credentials: AuthDomain): AuthPersistence {
    return {
      email: credentials.email,
      password: credentials.password,
    };
  }
}

export default new AuthMapper();
