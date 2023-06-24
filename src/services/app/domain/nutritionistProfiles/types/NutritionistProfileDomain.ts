import ScheduleDomain from "../../schedules/types/ScheduleDomain";
import UserDomain from "../../users/types/UserDomain";

export default interface NutritionistProfileDomain {
    id?: number;
    userId: number;
    timeWorkingInIndustry?: number;
    formation?: string;
    biography?: string;
    specialization?: string;
    createdBy?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    //relationships
    user?: UserDomain;
    schedule?: ScheduleDomain;
}
