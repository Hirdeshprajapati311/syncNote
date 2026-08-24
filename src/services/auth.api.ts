import { ApiRoutes } from "@/utils/apiRoutes";
import { axiosInstance } from "@/utils/axiosInstance";

export const loginApi = async (data: { email: string; password: string }) => {
  await axiosInstance.get("/sanctum/csrf-cookie");
  const response = await axiosInstance.post(ApiRoutes.AUTH.LOGIN, data);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await axiosInstance.get("/api/user");
  return response.data;
};

export const logoutApi = async () => {
  const response = await axiosInstance.post(ApiRoutes.AUTH.LOGOUT);
  return response.data;
};
