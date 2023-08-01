import "../db/index";
import mongoose from "mongoose";
import User from "../models/User.model";
import { users } from "../../client/types/user/mocks";

const usersWithObjectId = users.map((user) => {
  return { ...user, _id: new mongoose.Types.ObjectId(user._id) };
});

User.insertMany(usersWithObjectId)
  .then((users) => {
    users.forEach((user) => console.log(user.username));
    mongoose.connection.close();
  })
  .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

export {};
