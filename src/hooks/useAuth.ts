import { getCurrentUser, loginApi, logoutApi } from "@/services/auth.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      router.push("/");
      toast.success("Login Success");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetUser = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  });
};

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: ["currentUser"],
      });
      router.replace("/login");
    },
  });
};
