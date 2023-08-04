import { Trip } from "../trip/types";
export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  trips: Trip[];
  imageUrl?: string;
}

export interface UserProfile {
  username: string;
  email: string;
  imageUrl?: string;
}

export interface RegisterUserRequest {
  username: string;
  email: string;
  password: string;
}

export interface EditUseRequest {
  username: string;
  email: string;
  imageUrl?: string;
}
