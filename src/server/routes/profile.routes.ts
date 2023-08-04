import express from "express";
import mongoose from "mongoose";
import User from "../models/User.model";
import {
  AuthenticatedRequest,
  isAuthenticated,
} from "../middleware/jwt.middleware";
import fileUploader from "../config/cloudinary.config";

const router = express.Router();

/**
 * @show
 * @summary a specific user
 * @requestBody userId: string
 * @responseBody 200 - <User>
 */

router.get("/user/:userId", async (req, res, next) => {
  const { userId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  try {
    res.json(await User.findById(userId));
  } catch (err) {
    next(err);
  }
});

/**
 * @store
 * @summary a user profile picture
 */

router.post(
  "/upload",
  isAuthenticated,
  fileUploader.single("imageUrl"),
  (req, res, next) => {
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    res.json({ fileUrl: req.file.path });
  }
);

/**
 * @update
 * @summary a specific user
 * @requestBody userId: string
 * @responseBody 200 - <User>
 */

router.put("/:userId", isAuthenticated, async (req, res) => {
  const { userId } = req.params;
  const { username, email, imageUrl } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }

    await User.findByIdAndUpdate(userId, {
      username,
      email,
      imageUrl,
    });

    res.json(User.findById(userId));
  } catch (err) {
    res.json(err);
  }
});

/**
 * @delete
 * @summary delete a trip
 * @requestBody tripId: string
 * @responseBody 200 - <Trip>
 */
router.delete("/:userId", isAuthenticated, async (req, res, next) => {
  const { userId } = req.params;
  const AuthId = (req as AuthenticatedRequest).userAuth._id;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Specified id is not valid" });
  }

  try {
    if (AuthId !== userId) {
      return res.status(403).json({
        message: "Unauthorized. You can only delete your own account.",
      });
    }

    const deletedUser = await User.findByIdAndRemove(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({
      message: `User with ${userId} has been successfully deleted.`,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
