export default interface UserPersistence {
    id?: number;
    ativo?: boolean;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    name: string;
    role: "ADMIN" | "PATIENT" | "NUTRITIONIST";
    email: string;
    avatar?: string;
}
