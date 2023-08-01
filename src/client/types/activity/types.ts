import { User } from "../user/types";

export interface Activity {
  id: string;
  name: string;
  description: string;
  location: string;
  day: string;
  budget: number;
  imageUrl?: string;
}
