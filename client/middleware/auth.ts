import { defineNuxtRouteMiddleware } from "#app";
import { useUser } from "~/composables/useUser";

export default defineNuxtRouteMiddleware(  async() => {
const { currentUser, loadCurrentUser } = useUser();
 await loadCurrentUser();
    console.log(currentUser);
});

