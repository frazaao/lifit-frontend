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
            email: user.email,
            name: user.name,
            role: user.role,
            avatar: user.avatar,
        };
    }

    toPersistence(user: UserDomain): UserPersistence {
        return {
            id: user.id,
            ativo: user.active,
            created_at: user.createdAt,
            updated_at: user.updatedAt,
            deleted_at: user.deletedAt,
            email: user.email,
            name: user.name,
            role: user.role,
            avatar: user.avatar,
        };
    }
}

export default new UserMapper();
