import { Activity } from "../../../types/activity/types";
import { useNavigate } from "react-router-dom";
import {
  useCreateSurveyMutation,
  useUpdateTripMutation,
} from "../../../services/trips/actions";
import { useQueryClient } from "@tanstack/react-query";
import { User } from "../../../types/user/types";
import { Trip } from "../../../types/trip/types";

export interface TripFormValues {
  name: string;
  activities: Activity[];
  description?: string;
  holidayTimeframe: string;
  recommendedBudget: string;
}

// Custom hook
export const useTripForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const createTrip = useCreateSurveyMutation();
  const editTrip = useUpdateTripMutation();

  const onFinish = (
    values: TripFormValues,
    edit: boolean,
    user: User,
    storedImageUrl: string,
    trip?: Trip
  ) => {
    if (edit && trip?._id) {
      return editTrip.mutate(
        {
          data: {
            ...values,
            recommendedBudget: Number(values.recommendedBudget),
            ownerId: user._id,
            imageUrl: storedImageUrl,
          },
          tripId: trip._id,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: [user?._id || "unlogged", "trips"],
            });
            queryClient.invalidateQueries({
              queryKey: [user?._id || "unlogged", "trip", trip._id.toString()],
            });
            navigate(`/trips/${trip?._id}`);
          },
        }
      );
    } else {
      return createTrip.mutate(
        {
          ...values,
          recommendedBudget: Number(values.recommendedBudget),
          ownerId: user._id,
          imageUrl: storedImageUrl,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: [user?._id || "unlogged", "trips"],
            });
            navigate("/trips");
          },
        }
      );
    }
  };

  return { onFinish };
};
