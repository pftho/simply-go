import express from "express";
import mongoose from "mongoose";
import {
  AuthenticatedRequest,
  isAuthenticated,
} from "../middleware/jwt.middleware";
import User from "../models/User.model";
import Trip from "../models/Trip.model";
import { isTripOwner } from "../services";
import Activity from "../models/Activity.model";

const router = express.Router();

/**
 * @index
 * @summary if isAuthenticated : Returns an array of trips ELSE an array of trips with only 6 entries
 * @responseBody 200 - <Trip>[]
 */

router.get("/", async (req, res) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split("")[1] !== "null"
  ) {
    try {
      res
        .status(200)
        .json(await Trip.find().populate("owner").populate("activities"));
    } catch (err) {
      res.json(err);
    }
  } else {
    try {
      res.json(await Trip.find().populate("owner").limit(6));
    } catch (err) {
      res.json(err);
    }
  }
});

/**
 * @show
 * @summary a specific trip
 * @requestBody tripId: string
 * @responseBody 200 - <Trip>
 */

router.get("/:tripId", async (req, res) => {
  const { tripId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(tripId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  try {
    res
      .status(200)
      .json(
        await Trip.findById(tripId).populate("owner").populate("activities")
      );
  } catch (error) {
    res.json(error);
  }
});

/**
 * @store
 * @summary post route to create a trip
 * @responseBody 200 - <Trip>
 */

router.post("/", isAuthenticated, async (req, res) => {
  const {
    name,
    description,
    holidayTimeframe,
    activities,
    recommandedBudget,
    ownerId,
    imageUrl,
  } = req.body;

  try {
    const newTrip = await Trip.create({
      name,
      description,
      holidayTimeframe,
      recommandedBudget,
      owner: new mongoose.Types.ObjectId(ownerId),
      imageUrl,
    });

    const tripActivitiesIds = [];

    for (const activity of activities) {
      const newActivity = await Activity.create({
        name: activity.name,
        description: activity.description,
        type: activity.type,
        tripId: newTrip._id,
      });

      tripActivitiesIds.push(newActivity._id);
    }

    newTrip.activities = tripActivitiesIds;
    await newTrip.save();

    await User.findByIdAndUpdate(
      { _id: ownerId },
      {
        $push: { trip: newTrip._id },
      }
    ).exec();

    await Activity.findByIdAndUpdate(
      { _id: ownerId },
      {
        $push: { trip: newTrip._id },
      }
    ).exec();

    return res.status(201).json({
      message: "Trip has successfully been created",
      trip: newTrip,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error when creating the tri^" });
  }
});

/**
 * @update
 * @summary put route to update a trip
 * @requestBody tripId: string
 * @responseBody 200 - <Trip>
 */

router.put("/:tripId", isAuthenticated, async (req, res, next) => {
  const { tripId } = req.params;
  const userId = (req as AuthenticatedRequest).userAuth._id;

  if (!mongoose.Types.ObjectId.isValid(tripId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  const isOwner = await isTripOwner(userId, tripId);

  if (isOwner) {
    try {
      await Trip.findByIdAndUpdate(tripId, req.body, { new: true });
      return res.json(await Trip.findById(tripId).populate("owner"));
    } catch (error) {
      return res.json(error);
    }
  } else {
    res.redirect(303, "/api/trips");
  }
});

// /**
//  * @delete
//  * @summary delete a trip
//  * @requestBody tripId: string
//  * @responseBody 200 - <Trip>
//  */

// router.delete("/:tripId", isAuthenticated, async (req, res) => {
//   const { tripId } = req.params;
//   const userId = req.payload._id;

//   if (!mongoose.Types.ObjectId.isValid(tripId)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   const isOwner = await isTripOwner(userId, tripId);

//   if (isOwner) {
//     try {
//       Trip.findByIdAndRemove(tripId);
//       return res.json({
//         message: `Ad with ${tripId} is removed successfully.`,
//       });
//     } catch (error) {
//       res.json(error);
//     }
//   } else {
//     res.redirect(303, "/api/trips");
//   }
// });

export default router;
