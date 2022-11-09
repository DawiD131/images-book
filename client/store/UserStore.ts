import {defineStore} from "pinia";
import {User} from "~/models/user";
import {loginReq} from "~/repository";
import {LoginPayload} from "~/models";

interface State {
    currentUser: User | null
}

export const useUserStore = defineStore("UserStore", {
    state: () => (({
        currentUser: null
    }) as State),
    actions: {
     async login(payload: LoginPayload) {
         const response = await loginReq(payload);
         this.currentUser = response.data;
     }
    },
});

