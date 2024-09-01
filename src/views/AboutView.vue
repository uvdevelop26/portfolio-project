<script setup>
import FigureOne from "@/components/FigureOne.vue";
</script>
<template>
  <section
    class="p-4 w-full bg-secondary rounded-2xl flex flex-col gap-4 lg:h-full md:p-8 lg:p-10 lg:flex-row lg:items-center">
    <div class="max-w-xl mx-auto lg:flex-1">
      <p class="text-gold lg:text-xl">
        Mi interés por el desarrollo web me ha impulsado a buscar continuamente
        oportunidades de aprendizaje y crecimiento. A lo largo del tiempo, he
        adquirido conocimientos en
        <span class="font-bold underline">análisis de sistemas</span>
        utilizando herramientas UML,
        <span class="font-bold underline">bases de datos</span>,
        <span class="font-bold underline">diseño y desarrollo web</span>,
        especialmente en el frontend ya que disfruto creando interfaces
        interactivas y visualmente atractivas. Mi stack principal comprenden las
        tecnologías
        <span class="font-bold underline">MySQL, Vue.js, y Laravel con Inertia.</span>
        <br/> Actualmente, busco una posición de tiempo completo o una pasantía que
        me permita ganar experiencia como desarrollador web. Estoy comprometido
        con la formación continua, manteniéndome al día con las últimas
        tendencias del sector. Me entusiasma enfrentar nuevos desafíos y
        colaborar con clientes para convertir sus ideas en realidad.
      </p>
    </div>
    <FigureOne />
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
