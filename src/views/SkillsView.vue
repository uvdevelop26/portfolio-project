<script setup>
import Icon from "@/components/Icon.vue";
import gsap from "gsap";

const showDescription = (event) => {
  const bubble = event.target;
  const message = bubble.firstElementChild;
  message.classList.remove("hidden");
};

const hideDescription = (event) => {
  const bubble = event.target;
  const message = bubble.firstElementChild;
  message.classList.add("hidden");
};

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
  <section
    class="p-4 w-full bg-secondary rounded-2xl flex flex-col gap-2 lg:h-full md:p-8 lg:p-10 lg:flex-row lg:items-center">
    <div
      class="w-full flex flex-col items-center gap-4 max-w-4xl overflow-y-auto md:flex-row md:h-full md:items-start">
      <!-- Analisis -->
      <div
        class="h-[14rem] w-[18rem] bg-gold p-4 rounded-md shadow-2xl border border-primary md:w-[24rem]">
        <div class="w-full">
          <Icon name="analisis" class="inlile-block w-14 h-14 fill-secondary" />
        </div>
        <h1 class="text-secondary font-bold text-xl">Análisis de Sistemas</h1>
        <p class="text-xs pt-2 font-bold italic text-secondary ">
          Elaboración de Reglas de Negocios. Diagramas de Procesos de Negocios.
          Diagramas de Casos de Uso. Diagramas de Secuencias y/o Actividades.
        </p>
      </div>
      <!-- Frontend -->
      <div
        class="h-[14rem] w-[18rem] p-4 rounded-md shadow-2xl border border-primary md:w-[24rem]">
        <div class="w-full">
          <Icon name="frontend" class="inlile-block w-14 h-14 fill-white" />
        </div>
        <h1 class="text-gold font-bold text-xl">Programación Frontend</h1>
        <p class="text-xs pt-2 font-bold italic text-gold ">
          Tecnologías HTML, CSS, JavaScript. Tailwind CSS, Bootstrap 5+. SASS. Vue.js
        </p>
      </div>

      <!-- backend -->
      <div
        class="h-[14rem] w-[18rem] p-4 rounded-md shadow-2xl border border-primary md:w-[24rem]">
        <div class="w-full">
          <Icon name="backend" class="inlile-block w-14 h-14 fill-white" />
        </div>
        <h1 class="text-gold font-bold text-xl">Programación Backend</h1>
        <p class="text-xs pt-2 font-bold italic text-gold ">
          PHP, Laravel (con jetStream y otros kits), Node js, Express.
          Diseño y modelado de bases de datos MySQL y PostgreSQL.
        </p>
      </div>
    </div>
  </section>
</template>
