import { defineStore } from "pinia";
import { useCookie } from "#app";
import { User } from "~/models/user";
import { getUserReq, loginReq } from "~/repository";
import { LoginPayload } from "~/models";

interface State {
    currentUser: User | null;
    isAuthenticated: boolean
}

export const useUserStore = defineStore("UserStore", {
    state: () => (({
        currentUser: null,
    }) as State),
    actions: {
        async login(payload: LoginPayload) {
            const isAuth = useCookie("isAuth");

            try {
                const response = await loginReq(payload);
                isAuth.value = 'true';
                this.currentUser = response.data;
            } catch {
                this.currentUser = null;
                isAuth.value = 'false';
            }
        },
        async loadUser() {
            const isAuth = useCookie("isAuth");

            try {
                const response = await getUserReq();
                this.currentUser = response.data;
                isAuth.value = 'true';
            } catch (e) {
                this.currentUser = null;
                isAuth.value = 'false';
            }
        }
    },
});

