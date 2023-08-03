import express from "express";
import mongoose from "mongoose";
import User from "../models/User.model";
import { isAuthenticated } from "../middleware/jwt.middleware";
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

router.put("/user/:userId", isAuthenticated, async (req, res) => {
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

export default router;
