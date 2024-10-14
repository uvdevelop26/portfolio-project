<script setup>
import Icon from "@/components/Icon.vue";
import gsap from "gsap";
import FigureTwo from "@/components/FigureTwo.vue";

const beforeEnter = (el) => {
  el.style.transform = "translateY(60px)";
  el.style.opacity = 0;
};

const enter = (el, done) => {
  const index = parseInt(el.dataset.index, 10);
  gsap.to(el, {
    duration: 0.4,
    y: 0,
    opacity: 1,
    onComplete: done,
    delay: index * 0.2,
  });
};
</script>

<template>
  <section
    class="p-4 w-full bg-secondary rounded-2xl flex flex-col gap-2 lg:h-full md:p-8 lg:p-10 lg:flex-row lg:items-center">
    <div class="flex flex-col gap-4 max-w-2xl lg:gap-6">
      <p class="text-gold text-center font-bold max-w-lg">
        Contáctame mandando un mensaje en cualquiera de mis redes sociales,
        enviando un correo electrónico o escribiéndome al WhatsApp.
      </p>
      <div class="flex flex-col items-center gap-4">
        <!-- email -->
        <div
          class="h-14 w-72 border-2 border-primary bg-primary rounded-md shadow-2xl hover:bg-gold group">
          <a
            href="mailto:uvbusiness24@gmail.com"
            target="_blank"
            class="flex w-full h-full items-center gap-2 p-3 text-gold italic font-bold group-hover:text-primary">
            <Icon
              name="email"
              class="w-7 h-7 fill-gold group-hover:fill-primary"
            />
            uvbusiness24@gmail.com
          </a>
        </div>

        <!-- instagram -->
        <div
          class="h-14 w-72 border-2 border-primary bg-primary rounded-md shadow-2xl hover:bg-gold group">
          <a
            href="https://www.instagram.com/uvbusiness24/"
            target="_blank"
            class="flex w-full h-full items-center gap-2 p-3 text-gold italic font-bold group-hover:text-primary">
            <Icon
              name="instagram"
              class="w-7 h-7 fill-gold group-hover:fill-primary"
            />
            uvbusiness24
          </a>
        </div>
        <!-- Linkedin -->
        <div
          class="h-14 w-72 border-2 border-primary bg-primary rounded-md shadow-2xl hover:bg-gold group">
          <a
            href="https://www.linkedin.com/in/ubaldo-villalba/"
            target="_blank"
            class="flex w-full h-full items-center gap-2 p-3 text-gold italic font-bold group-hover:text-primary">
            <Icon
              name="linkedin"
              class="w-7 h-7 fill-gold group-hover:fill-primary"
            />
            Ubaldo Villalba
          </a>
        </div>
        <!-- whatsApp -->
        <div
          class="h-14 w-72 border-2 border-primary bg-primary rounded-md shadow-2xl hover:bg-gold group">
          <a
            href="https://www.instagram.com/uvbusiness24/"
            target="_blank"
            class="flex w-full h-full items-center gap-2 p-3 text-gold italic font-bold group-hover:text-primary">
            <Icon
              name="whatsapp"
              class="w-7 h-7 fill-gold group-hover:fill-primary"
            />
              0992 - 652991
          </a>
        </div>
      </div>
    </div>
    <FigureTwo />
  </section>
</template>

<style scoped>
.textanim-enter-from {
  opacity: 0;
  transform: translateY(30%);
}

.textanim-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.textanim-enter-active {
  transition: all 0.5s ease;
}
</style>
