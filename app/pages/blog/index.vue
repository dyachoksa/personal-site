<script lang="ts" setup>
const title = "Blog";
const description =
  "Thoughts on software development, system administration, technology, and occasional stories from mountain adventures and travels.";

useSeoMeta({
  title,
  description,
  ogTitle: `${title} | Kind Developer`,
  ogDescription: description,
  ogType: "website",
  ogImage: "/images/post-cover-image.jpg",
  ogUrl: "https://sdyachok.dev/blog",
  twitterTitle: `${title} | Kind Developer`,
  twitterDescription: description,
  twitterCreator: "@dyachoksa",
  twitterSite: "@dyachoksa",
  twitterCard: "summary_large_image",
  twitterImage: "/images/post-cover-image.jpg",
});

const { data: posts } = await useAsyncData(() => queryCollection("posts").order("date", "DESC").all());
</script>

<template>
  <layout-container>
    <h1 class="text-dark text-4xl leading-tight font-bold">Blog</h1>
    <p class="pt-6 text-gray-600 lg:pt-8">{{ description }}</p>

    <div v-if="posts" class="mt-8 space-y-6 md:space-y-8">
      <block-post-short v-for="post in posts" :key="post.path" :post="post" />
    </div>
  </layout-container>
</template>
