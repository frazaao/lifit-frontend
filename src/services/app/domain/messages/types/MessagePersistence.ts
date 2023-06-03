import UserPersistence from "../../users/types/UserPersistence";

export default interface MessagePersistence {
    id?: number;
    sender_id: number;
    recipient_id: number;
    content: string;
    created_by?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;

    //relationships
    sender: UserPersistence;
    recipient: UserPersistence;
}
