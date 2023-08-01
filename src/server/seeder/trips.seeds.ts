import "../db/index";
import mongoose from "mongoose";
import Trip from "../models/Trip.model";
import { trips } from "../../client/types/trip/mocks";

const tripsWithObjectId = trips.map((trip) => {
  return { ...trip, _id: new mongoose.Types.ObjectId(trip._id) };
});

Trip.insertMany(tripsWithObjectId)
  .then((trips) => {
    trips.forEach((trip) => console.log(trip.name));
    mongoose.connection.close();
  })
  .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

export {};
