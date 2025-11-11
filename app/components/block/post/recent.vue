<script setup lang="ts">
import type { Post } from "~/types";
import { formatDateShort } from "~/lib/formatters";

defineProps<{ post: Post }>();
</script>

<template>
  <div class="rounded-sm bg-white p-6 flex flex-col gap-4">
    <h3 class="text-dark text-2xl font-semibold">
      <nuxt-link :to="post.path" class="underline-offset-2 hover:underline">
        {{ post.title }}
      </nuxt-link>
    </h3>
    <div class="flex flex-row items-center gap-6">
      <time class="text-base text-dark/90 font-light" datetime="2023-09-01">{{ formatDateShort(post.date) }}</time>
      <div class="h-5 border-r border-light"></div>
      <p class="text-base text-dark/90 font-light">{{ post.tags }}</p>
    </div>

    <div>{{ post.summary }}</div>

    <div class="text-right">
      <nuxt-link :to="post.path" class="link"> Read more <icons-arrow-right class="size-4" /> </nuxt-link>
    </div>
  </div>
</template>
