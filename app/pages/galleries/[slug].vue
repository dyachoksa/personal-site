<script setup lang="ts">
const route = useRoute();

const slug = computed<string>(() => route.params.slug as string);
const { data: gallery } = await useAsyncData(() =>
  queryCollection("galleries").path(`/galleries/${slug.value}`).first()
);

useSeoMeta({
  title: gallery.value?.title,
  description: gallery.value?.subtitle,
  ogTitle: `${gallery.value?.title} | Kind Developer`,
  ogDescription: gallery.value?.subtitle,
  ogType: "article",
  ogImage: gallery.value?.mainImage,
  ogUrl: `https://sdyachok.dev/galleries/${slug.value}`,
  twitterTitle: `${gallery.value?.title} | Kind Developer`,
  twitterDescription: gallery.value?.subtitle,
  twitterCreator: "@dyachoksa",
  twitterSite: "@dyachoksa",
  twitterCard: "summary_large_image",
  twitterImage: gallery.value?.mainImage,
});

const rotations = ["rotate-2", "-rotate-2", "rotate-2", "-rotate-2", "rotate-2", "-rotate-2"];
const showLightbox = ref(false);
const currentImage = ref(0);

const showImage = (idx: number) => {
  currentImage.value = idx;
  showLightbox.value = true;
};
const hideLightbox = () => {
  showLightbox.value = false;
};
</script>

<template>
  <layout-container v-if="gallery">
    <h1 class="text-dark text-4xl leading-tight font-bold">{{ gallery.title }}</h1>
    <p class="pt-6 text-gray-600 lg:pt-8">{{ gallery.description }}</p>

    <div class="mt-8 flex flex-wrap justify-center gap-5 sm:gap-8">
      <a
        v-for="(image, idx) in gallery.images"
        :key="idx"
        :href="image"
        class="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-gray-100 sm:w-72 sm:rounded-2xl hover:rotate-none hover:scale-105 transition ease-linear"
        :class="rotations[idx % rotations.length]"
        @click.prevent="showImage(idx)"
      >
        <nuxt-img
          :src="image"
          :alt="`View image ${idx + 1} of ${gallery.images.length}`"
          sizes="176px sm:288px"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </a>
    </div>

    <vue-easy-lightbox :visible="showLightbox" :imgs="gallery.images" :index="currentImage" @hide="hideLightbox" />
  </layout-container>
</template>
