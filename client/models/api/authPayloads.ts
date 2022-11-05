export interface RegisterPayload {
    username: string;
    name: string;
    surname: string;
    email: string;
    pwd: string;
}

export interface LoginPayload {
    email: string;
    pwd: string;
}
