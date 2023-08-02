import { Trip } from "../trip/types";

export interface Activity {
  _id: string;
  name: string;
  description: string;
  type: string;
  trip: Trip;
}
