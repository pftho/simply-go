import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    trips: [{ type: Schema.Types.ObjectId, ref: "Trip" }],
    imageUrl: {
      type: String,
      default: "https://i.stack.imgur.com/34AD2.jpg",
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
