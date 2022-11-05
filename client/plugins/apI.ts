import axios from "axios";

export default defineNuxtPlugin(() => {
    const api = axios.create({
        timeout: 1000,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
        baseURL: "http://localhost:3000"
    });
    return {
        provide: {
          api
        }
    };
});

