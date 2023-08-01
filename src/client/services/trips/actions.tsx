import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/auth.context";
import { Trip, TripCreationRequest } from "../../types/trip/types";
import api from "../actions";

export const useTripsQuery = (opt = {}) => {
  const { getToken } = useAuth();

  return useQuery<Trip[]>({
    queryKey: ["trips"],
    queryFn: async () =>
      api
        .get("/api/trips", {
          headers: { Authorization: `Bearer ${await getToken()}` },
        })
        .then((res) => {
          return res.data;
        }),
    ...opt,
  });
};

export const useTripQuery = (id?: string, opt = {}) => {
  return useQuery<Trip>({
    queryKey: ["trip", id],
    queryFn: () =>
      api.get(`/api/trips/${id}`).then((res) => {
        return res.data;
      }),
    ...opt,
  });
};

export const useCreateSurveyMutation = () => {
  const { getToken } = useAuth();
  return useMutation<Trip, null, TripCreationRequest>(async (data) => {
    return await api
      .post("/api/trips", data, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      })
      .then((res) => res.data);
  });
};

export const useUpdateTripMutation = () => {
  return useMutation<Trip, null, { data: Partial<Trip>; id: string }>(
    ({ data, id }) =>
      api.patch(`/api/trips/${id}`, data).then((res) => res.data)
  );
};
