import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                @import "@/assets/scss/variables";
                @import "@/assets/scss/reset.scss";
                @import "@/assets/scss/mixins.scss";
                @import "@/assets/scss/animations.scss";
                @import "@/assets/scss/globals.scss";
                `,
            },
        },
    },
    plugins: [eslintPlugin()],
});
