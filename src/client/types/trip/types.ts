import { Activity } from "../activity/types";
import { User } from "../user/types";

export interface Trip {
  _id: string;
  name: string;
  description?: string;
  activities?: Activity[];
  holidayTimeframe: string;
  recommendedBudget: number;
  owner: User;
  imageUrl?: string;
}

export interface TripCreationUpdateRequest {
  name: string;
  description?: string;
  holidayTimeframe: string;
  activities?: Activity[];
  recommendedBudget: number;
  ownerId: string;
  imageUrl?: string;
}

export interface TripSeachFilters {
  name?: string;
  recommendedBudget?: string;
  holidayTimeframe?: string;
}
