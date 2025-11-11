import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    preset: "bun",
  },
  modules: ["@nuxt/fonts", "@nuxt/eslint", "@nuxt/image", "nuxt-easy-lightbox", "@nuxt/content", "@nuxtjs/mdc"],

  fonts: {
    defaults: {
      weights: ["300 900"],
    },
  },
  app: {
    rootAttrs: {
      class: "h-full flex flex-col",
    },
  },
  mdc: {
    components: { prose: true },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ["json", "js", "ts", "html", "css", "vue", "shell", "mdc", "md", "yaml", "python", "bash"],
          theme: {
            default: "github-light",
            dark: "github-dark",
          },
        },
      },
    },
  },
});
