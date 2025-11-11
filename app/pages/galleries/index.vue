<script lang="ts" setup>
const title = "Galleries";
const description = "A collection of photos and videos from my life, travels, and the world around me";

useSeoMeta({
  title,
  description,
  ogTitle: `${title} | Kind Developer`,
  ogDescription: description,
  ogType: "website",
  ogImage: "/images/cover-photo-1200x630.jpg",
  ogUrl: "https://sdyachok.dev/galleries",
  twitterTitle: `${title} | Kind Developer`,
  twitterDescription: description,
  twitterCreator: "@dyachoksa",
  twitterSite: "@dyachoksa",
  twitterCard: "summary_large_image",
  twitterImage: "/images/cover-photo-1200x630.jpg",
});

const rotations = ["rotate-2", "-rotate-2", "rotate-2", "-rotate-2", "rotate-2", "-rotate-2"];

const { data: galleries } = await useAsyncData(() => queryCollection("galleries").order("date", "DESC").all());
</script>

<template>
  <layout-container>
    <h1 class="text-dark text-4xl leading-tight font-bold">My galleries</h1>
    <p class="pt-6 text-gray-600 lg:pt-8">
      I love to take photos and videos. Here you'll find a collection of snapshots from my life, travels, and the world
      around me. Each photo holds a special memory or moment that I cherish, and I am excited to share them with you.
      From breathtaking sunsets to candid shots of loved ones, there's something for everyone to enjoy. So sit back,
      relax, and take a journey through my personal gallery.
    </p>

    <div class="mt-8 flex flex-wrap justify-center gap-5 sm:gap-8">
      <nuxt-link
        v-for="(gallery, idx) in galleries"
        :key="gallery.id"
        :to="gallery.path"
        class="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-gray-100 sm:w-72 sm:rounded-2xl hover:rotate-none hover:scale-105 transition ease-linear"
        :class="rotations[idx % rotations.length]"
      >
        <nuxt-img
          :src="gallery.mainImage"
          :alt="gallery.title"
          sizes="176px sm:288px md:350px"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div class="z-10 absolute bottom-0 left-0 right-0 bg-black/65 p-2">
          <p class="text-sm text-white">{{ gallery.title }}</p>
          <p v-if="gallery.subtitle" class="text-xs text-gray-300">{{ gallery.subtitle }}</p>
        </div>
      </nuxt-link>
    </div>
  </layout-container>
</template>
