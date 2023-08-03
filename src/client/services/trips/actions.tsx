import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/auth.context";
import { Trip, TripCreationUpdateRequest } from "../../types/trip/types";
import api from "../actions";

export const useTripsQuery = (
  opt: Omit<
    UseQueryOptions<Trip[], unknown, Trip[]>,
    "queryKey" | "queryFn" | "initialData"
  > = {}
) => {
  const { getToken, user } = useAuth();
  return useQuery<Trip[]>({
    queryKey: [user?._id || "unlogged", "trips"],
    queryFn: async () => {
      const token = await getToken();
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      return api.get("/api/trips", { headers }).then((res) => {
        return res.data;
      });
    },
    ...opt,
  });
};

export const useTripQuery = (
  id?: string,
  opt: Omit<
    UseQueryOptions<Trip, unknown, Trip>,
    "queryKey" | "queryFn" | "initialData"
  > = {}
) => {
  const { getToken, user } = useAuth();
  return useQuery<Trip>({
    queryKey: [user?._id || "unlogged", "trip", id],
    queryFn: async () =>
      api
        .get(`/api/trips/${id}`, {
          headers: { Authorization: `Bearer ${await getToken()}` },
        })
        .then((res) => {
          return res.data;
        }),
    ...opt,
  });
};

export const useCreateSurveyMutation = () => {
  const { getToken } = useAuth();
  return useMutation<Trip, null, TripCreationUpdateRequest>(async (data) => {
    return await api
      .post("/api/trips", data, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      })
      .then((res) => res.data);
  });
};

export const useUpdateTripMutation = () => {
  const { getToken } = useAuth();

  return useMutation<
    Trip,
    null,
    { data: TripCreationUpdateRequest; tripId: string }
  >(async ({ data, tripId }) =>
    api
      .put(`/api/trips/${tripId}`, data, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      })
      .then((res) => res.data)
  );
};

export const useDeleteTripMutation = () => {
  const { getToken } = useAuth();

  return useMutation<void, Error, string>(async (tripId) => {
    const token = await getToken();
    await api.delete(`/api/trips/${tripId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  });
};
