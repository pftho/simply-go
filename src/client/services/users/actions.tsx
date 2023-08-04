import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../context/auth.context";
import { Trip, TripCreationUpdateRequest } from "../../types/trip/types";
import api from "../actions";
import { EditUseRequest, User } from "../../types/user/types";

export const useUpdateUserMutation = () => {
  const { getToken } = useAuth();

  return useMutation<User, null, { data: EditUseRequest; userId: string }>(
    async ({ data, userId }) =>
      api
        .put(`/api/profile/${userId}`, data, {
          headers: { Authorization: `Bearer ${await getToken()}` },
        })
        .then((res) => res.data)
  );
};

export const useDeleteUserMutation = () => {
  const { getToken } = useAuth();

  return useMutation<void, Error, string>(async (userId) => {
    const token = await getToken();
    await api.delete(`/api/user/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  });
};
