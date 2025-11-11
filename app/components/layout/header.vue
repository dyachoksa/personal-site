<template>
  <header>
    <layout-container>
      <div class="py-6 flex items-center justify-between gap-8">
        <nuxt-link to="/" class="block rounded-full overflow-clip border-2 border-transparent hover:border-gray-300">
          <img src="/images/avatar.jpg" width="512" height="512" alt="Serhii Diachok" class="size-10" />
        </nuxt-link>

        <nav class="flex flex-wrap items-center justify-end gap-4 md:gap-6">
          <layout-nav-link to="/about-me">About Me</layout-nav-link>
          <layout-nav-link to="/blog">Blog</layout-nav-link>
          <layout-nav-link to="/projects">Projects</layout-nav-link>
          <layout-nav-link to="/galleries">Galleries</layout-nav-link>
        </nav>
      </div>
    </layout-container>
  </header>
</template>
