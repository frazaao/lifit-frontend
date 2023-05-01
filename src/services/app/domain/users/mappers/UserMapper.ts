import UserDomain from "../types/UserDomain";
import UserPersistence from "../types/UserPersistence";

class UserMapper {
    toDomain(user: UserPersistence): UserDomain {
        return {
            id: user.id,
            active: user.ativo,
            createdAt: user.created_at,
            updatedAt: user.updated_at,
            deletedAt: user.deleted_at,
        };
    }

    toPersistence(user: UserDomain): UserPersistence {
        return {
            id: user.id,
            ativo: user.active,
            created_at: user.createdAt,
            updated_at: user.updatedAt,
            deleted_at: user.deletedAt,
        };
    }
}

export default new UserMapper();
