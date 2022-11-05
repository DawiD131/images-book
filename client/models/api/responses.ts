import {User} from "~/models/user";

interface GenericResponse<T> {
    data: T
}

export type LoginResponse = Promise<GenericResponse<User>>

export type RegisterResponse = Promise<GenericResponse<User>>
