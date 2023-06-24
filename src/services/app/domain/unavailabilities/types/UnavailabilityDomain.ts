export default interface UnavailabilityDomain {
    id?: number;
    startDate: Date;
    endDate: Date;
    scheduleId: number;
    createdBy?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
