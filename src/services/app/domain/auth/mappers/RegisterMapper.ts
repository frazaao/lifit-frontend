import RegisterDomain from "../types/RegisterDomain";
import RegisterPersistence from "../types/RegisterPersistence";

class RegisterMapper {
    toDomain(credentials: RegisterPersistence): RegisterDomain {
        return {
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
            confirmPassword: credentials.confirm_password,
        };
    }

    toPersistence(credentials: RegisterDomain): RegisterPersistence {
        return {
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
            confirm_password: credentials.confirmPassword,
        };
    }
}

export default new RegisterMapper();
