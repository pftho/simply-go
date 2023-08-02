import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/auth.context";
import { Trip, TripCreationRequest } from "../../types/trip/types";
import api from "../actions";

export const useTripsQuery = (opt = {}) => {
  const { getToken } = useAuth();

  return useQuery<Trip[]>({
    queryKey: ["trips"],
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

export const useTripQuery = (id?: string, opt = {}) => {
  const { getToken } = useAuth();
  return useQuery<Trip>({
    queryKey: ["trip", id],
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

  return useMutation<Trip, null, TripCreationRequest>(async (data) => {
    return await api
      .post("/api/trips", data, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      })
      .then((res) => res.data);
  });
};

export const useUpdateTripMutation = () => {
  const { getToken } = useAuth();

  return useMutation<Trip, null, { data: Partial<Trip>; id: string }>(
    async ({ data, id }) =>
      api
        .patch(`/api/trips/${id}`, data, {
          headers: { Authorization: `Bearer ${await getToken()}` },
        })
        .then((res) => res.data)
  );
};
