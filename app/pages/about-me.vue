<script lang="ts" setup>
const title = "About me";
const description =
  "I'm Serhii Diachok, a software developer and system administrator from Ukraine with over 20 years of experience";

useSeoMeta({
  title,
  description,
  ogTitle: `${title} | Kind Developer`,
  ogDescription: description,
  ogType: "website",
  ogImage: "/images/cover-photo-1200x630.jpg",
  ogUrl: "https://sdyachok.dev/about-me",
  twitterTitle: `${title} | Kind Developer`,
  twitterDescription: description,
  twitterCreator: "@dyachoksa",
  twitterSite: "@dyachoksa",
  twitterCard: "summary_large_image",
  twitterImage: "/images/cover-photo-1200x630.jpg",
});

const socialLinks = [
  { url: "https://github.com/dyachoksa", name: "GitHub", icon: resolveComponent("IconsGithub") },
  {
    url: "https://www.facebook.com/people/Serhii-Diachok/61571712783868/",
    name: "Facebook",
    icon: resolveComponent("IconsFacebook"),
  },
  { url: "https://x.com/dyachoksa", name: "X", icon: resolveComponent("IconsTwitter") },
  { url: "https://www.instagram.com/sdyachok/", name: "Instagram", icon: resolveComponent("IconsInstagram") },
  { url: "https://www.linkedin.com/in/sdyachok/", name: "LinkedIn", icon: resolveComponent("IconsLinkedin") },
];
</script>

<template>
  <layout-container>
    <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div class="lg:pl-20">
        <div class="max-w-xs px-2.5 lg:max-w-none">
          <nuxt-img
            src="/images/portrait.jpg"
            alt="Portrait"
            width="1200"
            height="1200"
            sizes="100vw sm:50vw md:400px"
            class="aspect-square rotate-3 rounded-2xl bg-gray-100 object-cover"
          />
        </div>
      </div>

      <div class="lg:order-first lg:row-span-2">
        <h1 class="text-left text-dark text-4xl leading-tight font-bold">
          I'm Serhii. I live in Ukraine, where I build systems and chase mountains.
        </h1>

        <div class="mt-6 space-y-7 text-base text-gray-600 dark:text-gray-400">
          <p>
            I've been working with computers for over two decades now, and honestly, it still hasn't gotten boring.
            Software development and system administration started as curiosity, became a career, and somewhere along
            the way turned into a genuine passion. There's something deeply satisfying about making complex systems work
            reliably - even if it means debugging at 2 AM occasionally.
          </p>
          <p>
            When I'm not staring at terminal windows or writing code, you'll find me with a camera in hand. Photography
            gives me a different way to see the world - capturing moments, playing with light, and freezing time in a
            frame. It's the perfect counterbalance to the abstract world of software.
          </p>
          <p>
            But my real passion? Mountains. There's something about the challenge of the climb, the beauty of the
            landscape, and the quiet at the summit that puts everything in perspective. Whether it's a weekend hike or a
            more ambitious trek, mountains are where I feel most alive. Plus, they make for excellent photography
            subjects - though lugging camera gear uphill is its own kind of workout.
          </p>
          <p>
            Speaking of workouts, a couple of years ago I completed the Sydney Half Marathon. Training for it taught me
            that the satisfaction doesn't just come from crossing the finish line, but from becoming someone capable of
            crossing it. It's the same principle whether you're running 21 kilometers, debugging a production issue, or
            learning a new technology - the journey matters as much as the destination.
          </p>
          <p>
            These days, I split my time between building reliable systems, exploring new places (preferably with
            mountains), and setting personal challenges that keep life interesting. Because what's the point of two
            decades in tech if you can't appreciate that the best bugs are the ones you find in the wild - preferably
            while hiking, not in production.
          </p>
        </div>
      </div>

      <div class="lg:pl-20">
        <ul class="space-y-4">
          <li v-for="link in socialLinks" :key="link.name" class="flex">
            <nuxt-link
              :to="link.url"
              class="group flex items-center gap-4 text-base text-dark transition hover:text-primary"
              target="_blank"
            >
              <component :is="link.icon" class="size-5 flex-none fill-dark transition group-hover:fill-primary" />
              <span>Follow on {{ link.name }}</span>
            </nuxt-link>
          </li>

          <li class="flex">
            <a
              href="mailto:sergey@sdyachok.dev"
              class="border-t border-gray-100 pt-4 group flex items-center gap-4 text-base text-dark transition hover:text-primary"
            >
              <icons-mail class="size-5 flex-none fill-dark transition group-hover:fill-primary" />
              <span>sergey@sdyachok.dev</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </layout-container>
</template>
