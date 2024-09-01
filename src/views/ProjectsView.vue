<script setup>
import projects from "@/data/projects";
import gsap from "gsap";
import Icon from "@/components/Icon.vue";

/* animation */
const beforeEnter = (el) => {
  el.style.transform = "translateY(60px)";
  el.style.opacity = 0;
};

const enter = (el, done) => {
  gsap.to(el, {
    duration: 0.4,
    y: 0,
    opacity: 1,
    onComplete: done,
    delay: el.dataset.index * 0.1,
  });
};
</script>
<template>
  <section class="p-4 w-full bg-secondary rounded-2xl md:p-8 lg:p-10">
    <div
      class="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:gap-5">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :data-index="index">
        <div
          class="w-72 h-[12.5rem] bg-primary rounded-md flex flex-col items-center justify-center relative">
          <div class="w-64 h-32 rounded-md overflow-hidden">
            <img
              :src="project.image"
              alt="project"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="pt-2">
          <h2 class="font-bold text-sm text-gold italic underline">
            {{ project.name }}
          </h2>
          <div class="flex gap-3">
            <template v-if="project.live">
              <a
                target="_blank"
                :href="project.live"
                class="inline-block text-sm font-bold text-gold cursor-pointer hover:underline">
                Sitio
                <Icon name="square-open" class="inline-block w-3 h-3 fill-gold"/> </a>
              </template>
            <a
              target="_blank"
              :href="project.github"
              class="inline-block text-sm font-bold text-gold cursor-pointer hover:underline">
              Github
              <Icon name="github" class="inline-block w-3 h-3 fill-gold" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
