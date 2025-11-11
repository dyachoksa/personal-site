<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="py-12 flex items-center justify-center">
    <div class="flex flex-col justify-center items-center gap-6">
      <div class="flex items-center gap-8">
        <nuxt-link to="https://github.com/dyachoksa" target="_blank" class="block">
          <icons-github class="size-8 fill-dark hover:fill-[#181717]" />
        </nuxt-link>

        <nuxt-link to="https://www.facebook.com/people/Serhii-Diachok/61571712783868/" target="_blank" class="block">
          <icons-facebook class="size-8 fill-dark hover:fill-[#0866FF]" />
        </nuxt-link>

        <nuxt-link to="https://x.com/dyachoksa" target="_blank" class="block">
          <icons-twitter class="size-8 fill-dark hover:fill-black" />
        </nuxt-link>

        <nuxt-link to="https://www.instagram.com/sdyachok/" target="_blank" class="block">
          <icons-instagram class="size-8 fill-dark hover:fill-[#FF0069]" />
        </nuxt-link>

        <nuxt-link to="https://www.linkedin.com/in/sdyachok/" target="_blank" class="block">
          <icons-linkedin class="size-8 fill-dark hover:fill-[#0077b7]" />
        </nuxt-link>
      </div>
      <p class="text-base text-dark">&copy; {{ year }}, Serhii Diachok</p>
    </div>
  </footer>
</template>
