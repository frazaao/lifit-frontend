import UserDomain from "../../users/types/UserDomain";

export default interface MessageDomain {
    id?: number;
    senderId: number;
    recipientId: number;
    content: string;
    createdBy?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    //relationships
    sender: UserDomain;
    recipient: UserDomain;
}
