import { User } from "@/app/types/auth.type";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "./apiClient";

const useLogin = () => {
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      return apiClient.post("/auth/login", data);
    },

    onSuccess: (data) => {
      console.log("Login successful:", data);
    },
  });
};

const useSignUp = () => {
  return useMutation({
    mutationFn: async (data: User) => {
      return apiClient.post("/auth/sign-up", data);
    },

    onSuccess: (data) => {
      console.log("Sign-up successful:", data);
    },
  });
};

export { useLogin, useSignUp };
