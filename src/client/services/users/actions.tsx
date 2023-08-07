import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../context/auth.context";
import { EditUseRequest, User } from "../../types/user/types";
import api from "../actions";

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
    await api.delete(`/api/profile/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  });
};
