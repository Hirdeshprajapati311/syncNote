import { ApiRoutes } from "@/utils/apiRoutes";
import { axiosInstance } from "@/utils/axiosInstance";
import { Note } from "@/utils/types";

export const createNoteApi = async () => {};

export const getAllNotesApi = async (): Promise<Note[]> => {
  const response = await axiosInstance.get(ApiRoutes.NOTE.GET_ALL);
  return response.data.notes;
};
