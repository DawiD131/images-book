import {  defineNuxtRouteMiddleware, navigateTo, useCookie } from "#app";

export default defineNuxtRouteMiddleware(() => {
    const isAuth = useCookie("isAuth");
    if (isAuth.value === false) {
        return navigateTo('/');
    }
});

