import express from "express";
const router = express.Router();

import auth from "./auth.routes";
import profile from "./profile.routes";
import trips from "./trip.routes";

router.get("/", (req, res, next) => {
  res.json("working");
});

router.use("/auth", auth);
router.use("/profile", profile);
router.use("/trips", trips);

export default router;
