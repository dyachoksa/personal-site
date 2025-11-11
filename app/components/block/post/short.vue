<script setup lang="ts">
import type { Post } from "~/types";
import { formatDateShort } from "~/lib/formatters";

defineProps<{ post: Post }>();
</script>

<template>
  <div class="flex flex-col gap-3 not-last:pb-6 md:not-last:pb-8 not-last:border-b border-gray-200">
    <h2 class="text-dark text-2xl font-medium">
      <nuxt-link :to="post.path" class="underline-offset-2 hover:underline">{{ post.title }}</nuxt-link>
    </h2>

    <div class="flex flex-row items-center gap-6">
      <time datetime="2023-09-01">{{ formatDateShort(post.date) }}</time>
      <div class="h-5 border-r border-light"></div>
      <p class="text-base text-dark/90 font-light">{{ post.tags }}</p>
    </div>

    <p>
      {{ post.summary }}
    </p>

    <div class="text-right">
      <nuxt-link :to="post.path" class="link"> Read more <icons-arrow-right class="size-4" /> </nuxt-link>
    </div>
  </div>
</template>
