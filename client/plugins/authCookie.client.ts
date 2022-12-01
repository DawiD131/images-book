import { defineNuxtPlugin, useCookie } from "#app";
import { useUserStore } from "~/store/UserStore";

export default defineNuxtPlugin(async () => {
    const isAuthCookie = useCookie("isAuth");
    const userStore = useUserStore();
    await userStore.loadUser();

    if (userStore.currentUser) {
        isAuthCookie.value = "true";
    } else {
        isAuthCookie.value = "false";
    }

});
