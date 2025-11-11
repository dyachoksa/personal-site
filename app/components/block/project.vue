<script setup lang="ts">
import type { Project } from "~/types";

const props = defineProps<{ project: Project }>();

const website = computed(() => props.project.url?.replace("https://", "").replace("http://", "").split("/")[0]);
</script>

<template>
  <div class="flex flex-col md:flex-row gap-5 not-last:pb-6 md:not-last:pb-8 not-last:border-b border-gray-200">
    <div class="shrink-0">
      <div class="rounded-sm overflow-clip border border-gray-200">
        <nuxt-img
          :src="project.image"
          width="2000"
          height="1600"
          sizes="100vw md:800px"
          class="w-full h-auto md:w-64 md:h-52 object-cover"
          alt="Project image"
        />
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h3 class="text-dark text-2xl font-semibold">
        <nuxt-link :to="project.url" target="_blank" class="underline-offset-2 hover:underline">
          {{ project.title }}
        </nuxt-link>
      </h3>
      <div class="flex items-center gap-4">
        <span class="block rounded-full bg-dark-02 text-white text-base font-bold px-2 py-0.5">{{ project.year }}</span>
        <p class="text-base text-light">{{ project.tags.join(", ") }}</p>
      </div>

      <p class="text-dark">{{ project.description }}</p>

      <div>
        <nuxt-link :to="project.url" target="_blank" class="link">
          <icons-link class="size-4" /> {{ website }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
