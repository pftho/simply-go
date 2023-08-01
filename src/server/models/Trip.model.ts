import { Schema, model } from "mongoose";

const tripSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    activities: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Activity",
        },
      ],
    },
    holidayTimeframe: {
      type: String,
      enum: ["Spring", "Summer", "Autumn", "Winter"],
      required: true,
    },
    recommandedBudget: {
      type: Number,
    },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    imageUrl: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1617883984017-a53b8edabada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    },
  },
  {
    timestamps: true,
  }
);

const Trip = model("Trip", tripSchema);

export default Trip;
