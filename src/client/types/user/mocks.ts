import { User } from "./types";

export const paulineThomas: User = {
  _id: "612fd241b8d481234567890a",
  username: "Pauline Thomas",
  email: "pauline.thomas@travel.co",
  password: "ksjhfksjhkFs1hurkguh",
  trips: [],
};

export const maelyssArnaud: User = {
  _id: "612fd241b8d481234567890b",
  username: "Maelyss Arnaud",
  email: "maelyss.arnaud@travel.co",
  password: "ksjhfksjhkFs1hurkguh",
  trips: [],
};

export const users: User[] = [paulineThomas, maelyssArnaud];
