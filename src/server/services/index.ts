import Trip from "../models/Trip.model";

export const isTripOwner = async (userId: string, tripId: string) => {
  try {
    const tripToPatch = await Trip.findById(tripId);
    return String(tripToPatch?.owner) === userId;
  } catch (error) {
    return;
  }
};
