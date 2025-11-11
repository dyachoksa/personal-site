<script lang="ts" setup>
const title = "Serhii Diachok";
const description = "Software engineer, system administrator, and mountain enthusiast from Ukraine";
const rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];

useSeoMeta({
  title,
  description,
  ogTitle: `${title} | Kind Developer`,
  ogDescription: description,
  ogType: "website",
  ogImage: "/images/cover-photo-1200x630.jpg",
  ogUrl: "https://sdyachok.dev",
  twitterTitle: `${title} | Kind Developer`,
  twitterDescription: description,
  twitterCreator: "@dyachoksa",
  twitterSite: "@dyachoksa",
  twitterCard: "summary_large_image",
  twitterImage: "/images/cover-photo-1200x630.jpg",
});

const images = [
  "/images/galleries/ukrainian-carpathians/809f8504-2632-46b5-aea5-235b72b5676e.jpg",
  "/images/galleries/nature-nearby/edbb53e5-eaad-4456-8e3d-3c56a4e49f4d.jpg",
  "/images/galleries/ukrainian-carpathians/d416efbb-f994-4a4b-a90f-b38679263f3d.jpg",
  "/images/galleries/nature-nearby/5cd8ce79-fa9c-4331-821e-322a9638dd05.jpg",
  "/images/galleries/ukrainian-carpathians/20b20b98-6faa-4ae3-b56c-a11d494c367c.jpg",
  "/images/galleries/nature-nearby/f3697200-e312-4ddd-bd64-71136f22b7a6.jpg",
];

const { data: posts } = await useAsyncData(() => queryCollection("posts").order("date", "DESC").limit(2).all());
const { data: projects } = await useAsyncData(() => queryCollection("projects").order("year", "DESC").limit(3).all());
</script>

<template>
  <layout-container>
    <div class="flex flex-col-reverse items-center md:flex-row gap-16">
      <div class="flex flex-col gap-8">
        <h1 class="text-center text-dark text-4xl leading-14 font-bold md:text-left">
          Hi, I'm Serhii, Software Engineer
        </h1>

        <p class="text-dark text-center md:text-left">
          I'm Serhii, a software developer and system administrator based in Ukraine. With over two decades of
          experience in technology, I build reliable systems and solve complex problems. When I'm not working with code,
          you'll find me exploring mountains with a camera in hand or chasing personal challenges like completing
          marathons.
        </p>

        <div class="text-center md:text-left">
          <nuxt-link to="/about-me" class="btn btn-primary">About Me</nuxt-link>
        </div>
      </div>

      <div class="relative max-w-xs lg:max-w-none">
        <nuxt-img
          src="/images/portrait-alt.jpg"
          width="1000"
          height="1000"
          alt="Portrait"
          class="aspect-square rotate-3 rounded-2xl bg-gray-100 object-cover"
        />
      </div>
    </div>
  </layout-container>

  <div class="mt-16 sm:mt-20 bg-gray-50">
    <div class="flex justify-center gap-5 overflow-hidden py-12 sm:gap-8">
      <div
        v-for="(image, idx) in images"
        :key="idx"
        class="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-gray-100 sm:w-72 sm:rounded-2xl"
        :class="rotations[idx % rotations.length]"
      >
        <img
          :src="image"
          :alt="`Image ${idx + 1}`"
          sizes="176px sm:288px md:350px"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  </div>

  <div class="py-8 bg-secondary-light">
    <layout-container>
      <div class="flex items-center justify-between gap-4">
        <h2 class="text-xl text-dark">Recent posts</h2>
        <nuxt-link to="/blog" class="block text-secondary hover:underline">View all</nuxt-link>
      </div>

      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
        <block-post-recent v-for="post in posts" :key="post.path" :post="post" />
      </div>
    </layout-container>
  </div>

  <layout-container>
    <div class="py-8">
      <div class="flex items-center justify-between gap-4">
        <h2 class="text-xl text-dark">Featured works</h2>
        <nuxt-link to="/projects" class="block text-secondary hover:underline">View all</nuxt-link>
      </div>
    </div>

    <div v-if="projects" class="space-y-6 md:space-y-8">
      <block-project v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </layout-container>
</template>
