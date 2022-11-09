import { defineStore } from "pinia";
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
            const response = await loginReq(payload);
            this.currentUser = response.data;
        },
        async loadUser() {
            try {
                const response = await getUserReq();
                this.currentUser = response.data.username;
            } catch (e) {
                this.currentUser = null;
            }
        }
    },
});

