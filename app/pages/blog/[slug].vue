<script lang="ts" setup>
import { formatDateShort } from "~/lib/formatters";

const route = useRoute();
const slug = computed<string>(() => route.params.slug as string);

const { data: post } = await useAsyncData(`post-${slug.value}`, () =>
  queryCollection("posts").path(`/blog/${slug.value}`).first()
);

useSeoMeta({
  title: post.value?.title,
  description: post.value?.summary,
  ogTitle: `${post.value?.title} | Kind Developer`,
  ogDescription: post.value?.summary,
  ogType: "article",
  ogImage: "/images/post-cover-image.jpg",
  ogUrl: `https://sdyachok.dev/blog/${slug.value}`,
  twitterTitle: `${post.value?.title} | Kind Developer`,
  twitterDescription: post.value?.summary,
  twitterCreator: "@dyachoksa",
  twitterSite: "@dyachoksa",
  twitterCard: "summary_large_image",
  twitterImage: "/images/post-cover-image.jpg",
});
</script>

<template>
  <layout-container>
    <article v-if="post">
      <header class="flex flex-col gap-4">
        <h1 class="text-dark text-4xl leading-tight font-bold">{{ post.title }}</h1>

        <div class="flex flex-row items-center gap-6">
          <time datetime="2023-09-01">{{ formatDateShort(post.date) }}</time>
          <div class="h-5 border-r border-light"></div>
          <p class="text-base text-dark/90 font-light">{{ post.tags }}</p>
        </div>
      </header>

      <content-renderer :value="post" class="mt-4 prose max-w-full" prose />
    </article>
  </layout-container>
</template>
