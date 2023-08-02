import "../db/index";
import mongoose from "mongoose";
import Activity from "../models/Activity.model";
import { activitiesBali } from "../../client/types/activity/mocks";

const tripsWithObjectId = activitiesBali.map((activity) => {
  return { ...activity, _id: new mongoose.Types.ObjectId(activity._id) };
});

Activity.insertMany(tripsWithObjectId)
  .then((activities) => {
    activities.forEach((activity) => console.log(activity.name));
    mongoose.connection.close();
  })
  .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

export {};
