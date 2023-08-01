import { Trip } from "../trip/types";
export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  trips: Trip[];
  imageUrl?: string;
}

export interface RegisterUserRequest {
  username: string;
  email: string;
  password: string;
}
