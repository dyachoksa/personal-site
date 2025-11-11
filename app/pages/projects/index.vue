<script lang="ts" setup>
const title = "Projects";
const description = "A collection of projects I've built over the years, from web applications to system tools";

useSeoMeta({
  title,
  description,
  ogTitle: `${title} | Kind Developer`,
  ogDescription: description,
  ogType: "website",
  ogImage: "/images/cover-photo-1200x630.jpg",
  ogUrl: "https://sdyachok.dev/projects",
  twitterTitle: `${title} | Kind Developer`,
  twitterDescription: description,
  twitterCreator: "@dyachoksa",
  twitterSite: "@dyachoksa",
  twitterCard: "summary_large_image",
  twitterImage: "/images/cover-photo-1200x630.jpg",
});

const { data: projects } = await useAsyncData(() => queryCollection("projects").order("year", "DESC").all());
</script>

<template>
  <layout-container>
    <h1 class="text-dark text-4xl leading-tight font-bold">Projects I've built over two decades in tech</h1>
    <p class="pt-6 text-gray-600 lg:pt-8">
      A collection of projects I've worked on over the years, ranging from web applications to system tools. Many of
      them are open-source, so if you see something that piques your interest, check out the code and contribute if you
      have ideas for how it can be improved.
    </p>

    <div v-if="projects" class="mt-8 space-y-6 md:space-y-8">
      <block-project v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </layout-container>
</template>
