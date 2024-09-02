<script setup>
import UndrawImg from "@/components/UndrawImg.vue";
</script>

<template>
  <section
    class="p-4 w-full bg-secondary rounded-2xl border-[.5px] border-primary flex flex-col gap-4 md:p-8 lg:p-10 lg:gap-2 lg:flex-row-reverse lg:items-center">
    <!-- undraw element -->
    <UndrawImg />

    <div class="max-w-xl mx-auto lg:flex-1 lg:h-84 lg:pt-8">
      <h1 class="text-lg lg:text-2xl text-gold font-bold">
        Hola, mi nombre es
        <span class="underline">Ubaldo Villalba</span>
      </h1>
      <p class="pt-2 text-gold  lg:text-xl lg:pt-4">
        Soy desarrollador web, disfruto creando sitios web y aplicaciones.
        Actualmente me encuentro expandiendo mis habilidades mediante el
        aprendizaje de nuevas e innovadoras tecnologías.
      </p>
      <div class="flex pt-8 gap-3">
        <a
          href="/CV/curriculum_ubaldo_villalba.pdf"
          target="_blank"
          download="Curriculum_Ubaldo.pdf"
          class="w-32 h-9 flex items-center justify-center text-sm font-bold rounded-2xl bg-gold text-secondary hover:bg-secondary hover:text-gold hover:border hover:border-gold">
          Descargar CV
        </a>
        <a
          target="_blank"
          href="https://wa.me/+595992652991"
          class="w-32 h-9 flex items-center justify-center text-sm font-bold rounded-2xl border border-gold text-gold hover:bg-gold hover:text-secondary">
          Hablemos
        </a>
      </div>
    </div>
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
