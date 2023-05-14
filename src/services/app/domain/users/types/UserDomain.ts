export default interface UserDomain {
    id?: number;
    active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    name: string;
    role: "ADMIN" | "PATIENT" | "NUTRITIONIST";
    email: string;
    avatar?: string;
}
