import { computed, ComputedRef } from "@vue/reactivity";
import { useUserStore } from "~/store/UserStore";
import { User } from "~/models";

interface IUseUser {
    currentUser: ComputedRef<User | null>;
    loadCurrentUser: () => Promise<void>;
}

export const useUser = (): IUseUser => {
    const { currentUser, loadUser } = useUserStore();

    return {
        currentUser: computed(() => currentUser),
        loadCurrentUser: loadUser
    };
};
