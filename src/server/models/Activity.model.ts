import { Schema, model } from "mongoose";

const activitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
      enum: [
        "Relaxing",
        "Sport",
        "Culture & Sightseeing",
        "Wildlife & Nature",
        "Food & Gastronomy",
        "Art & Creativity",
        "Nightlife & Entertainment",
        "Religious & Spiritual",
        "Other",
      ],
      required: true,
    },

    trip: { type: Schema.Types.ObjectId, ref: "Trip" },
  },
  {
    timestamps: true,
  }
);

const Activity = model("Activity", activitySchema);

export default Activity;
