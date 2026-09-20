import { getAllNotesApi } from "@/services/note.api"
import { useQuery } from "@tanstack/react-query"



export const useGetAllNotes = () => {
  return useQuery({
    queryKey: ['allNotes'],
    queryFn: getAllNotesApi,
  })
}