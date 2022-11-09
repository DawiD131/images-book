import { api } from "./apiClient";
import { LoginPayload, LoginResponse, RegisterPayload, RegisterResponse, UserResponse } from "~/models";

export const registerReq =
    async (payload: RegisterPayload): RegisterResponse => await api.post("/register", payload);

export const loginReq =
    async (payload: LoginPayload): LoginResponse => await api.post("/auth/login", payload);

export const logoutReq = async () => await api.get("/auth/logout");

export const getUserReq = async (): UserResponse => await api.get("/user/");
