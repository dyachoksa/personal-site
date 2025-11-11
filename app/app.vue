<script lang="ts" setup>
useHead({
  title: "Kind Developer",
  titleTemplate: "%s | Kind Developer",
  htmlAttrs: { lang: "en", class: "h-full" },
  bodyAttrs: {
    class: "h-full flex flex-col bg-white text-gray-900 text-base font-sans antialiased",
  },
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
    { name: "referrer", content: "no-referrer-when-downgrade" },
    { name: "application-name", content: "Kind Developer" },
    { name: "apple-mobile-web-app-title", content: "KindDev" },
    { name: "color-scheme", content: "light dark" },
    { name: "theme-color", content: "#ffffff" },
  ],
  link: [
    { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "shortcut icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
});
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
