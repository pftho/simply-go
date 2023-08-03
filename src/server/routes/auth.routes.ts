import bcrypt from "bcryptjs";
import express from "express";
import jwt from "jsonwebtoken";

import {
  AuthenticatedRequest,
  isAuthenticated,
} from "../middleware/jwt.middleware";
import User from "../models/User.model";

const router = express.Router();
const saltRound = 10;

/**
 * @store
 * @summary post route to create a user
 * @responseBody 200 - <User>
 */
router.post("/register", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400).json({ errorMessage: "All fields are mandatory" });
      return;
    }

    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!passwordRegex.test(password)) {
      res.status(400).json({
        errorMessage:
          "Please enter a password with at least 6 characters, one number, one lowercase and one uppercase letter.",
      });
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        errorMessage: "Please enter a valid email",
      });
      return;
    }

    const userByEmail = await User.findOne({ email });
    if (userByEmail) {
      res.status(400).json({
        errorMessage:
          "You already have an account, please go to the Login page",
      });
      return;
    }

    const userByUsername = await User.findOne({ username });
    if (userByUsername) {
      res.status(400).json({
        errorMessage: "User name already in use",
      });
      return;
    }

    const salt = bcrypt.genSaltSync(saltRound);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const userCreated = {
      username,
      email,
      password: hashedPassword,
    };

    const newUser = await User.create(userCreated);
    res.status(200).json({
      email: newUser.email,
      username: newUser.username,
      _id: newUser._id,
    });
  } catch (err) {
    next(err);
  }
});

/**
 * @store
 * @summary post route for user to login
 * @responseBody 200 - <User>
 */

router.post("/login", async (req, res, next) => {
  const { password, email } = req.body;

  if (!email || !password) {
    res.status(400).json({ errorMessage: "All fields are mandatory" });
    return;
  }

  try {
    const foundUser = await User.findOne({ email });
    const foundUserPassword = foundUser?.password || "";

    if (!foundUser) {
      res.status(400).json({
        errorMessage: "No account found with this email address",
      });
      return;
    }

    const passwordCorrect = bcrypt.compareSync(password, foundUserPassword);

    if (passwordCorrect) {
      const { _id, email, username } = foundUser;
      const payload = { _id, email, username };

      const authToken = jwt.sign(
        payload,
        process.env.TOKEN_SECRET || "DEFAULT_TOKEN_SECRET",
        {
          algorithm: "HS256",
          expiresIn: "6h",
        }
      );
      res.status(200).json({ authToken });
    } else {
      res.status(401).json({
        errorMessage: "Unable to authenticate",
      });
    }
  } catch (err) {
    next(err);
  }
});

/**
 * @show
 * @summary get user token
 * @responseBody 200 - <token>
 */

router.get("/verify", isAuthenticated, (req, res) => {
  res.status(200).json((req as AuthenticatedRequest).userAuth);
});

export default router;
