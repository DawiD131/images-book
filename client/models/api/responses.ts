import { User } from "~/models/user";

type GenericResponse<T> = Promise<{ data: T }>

export type LoginResponse = GenericResponse<User>

export type RegisterResponse = GenericResponse<User>

export type UserResponse = GenericResponse<User>
