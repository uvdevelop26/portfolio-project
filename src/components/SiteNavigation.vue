<script setup>
import Icon from "./Icon.vue";
import { ref, onMounted, onUnmounted } from "vue";

const isMobile = ref(null);
let mql = null;

const handleMqlChange = (e) => {
  isMobile.value = e.matches;
};

onMounted(() => {
  mql = window.matchMedia("(min-width: 1024px)");
  isMobile.value = mql.matches;

  mql.addEventListener("change", handleMqlChange);
});

onUnmounted(() => {
  mql.removeEventListener("change", handleMqlChange);
});
</script>
<template>
  <nav
    class="p-4 w-full flex-shrink-0 bg-secondary rounded-2xl overflow-hidden shadow-md relative border-[.5px] border-primary lg:w-[20vw]"
    id="#nav">
    <!-- button toggle menu options -->
    <button
      class="absolute p-3 bg-primary rounded-bl-2xl right-0 top-0 z-10 hover:border hover:border-gold hover:bg-secondary focus:border-gold lg:hidden"
      @click="isMobile = !isMobile">
      <Icon name="cheveron-down" class="h-3 w-3 fill-gold" />
    </button>
    <!-- header -->
    <div class="flex items-center gap-4 lg:flex-col lg:justify-center">
      <div
        class="h-18 w-18 bg-primary overflow-hidden rounded-2xl lg:flex-shrink-0">
        <img
          src="/images/uv.png"
          alt="avatar"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="lg:text-center">
        <span class="block text-white font-bold lg:text-sm">
          Ing. Ubaldo Villalba
        </span>
        <p
          class="mt-2 text-white font-bold text-xs bg-primary px-3 pb-1 rounded-xl italic">
          Desarrollo y Programación.
        </p>
      </div>
    </div>
    <!-- body -->
    <transition>
      <div class="mt-5 pt-2 border-t border-gold" v-if="isMobile">
        <ul>
          <!-- home link -->
          <li class="flex items-center w-full mb-1">
            <router-link to="/" v-slot="{ isActive }" class="flex w-full">
              <div
                class="flex py-3 px-2 rounded-xl w-full h-full items-center gap-3 text-white text-sm font-bold hover:bg-primary group"
                :class="isActive ? 'bg-primary' : ''">
                <div
                  class="p-2 rounded-lg group-hover:bg-gold"
                  :class="isActive ? 'bg-gold' : 'bg-primary'">
                  <Icon
                    name="home"
                    class="w-3 h-3 fill-gold group-hover:fill-primary"
                    :class="isActive ? 'fill-primary' : 'fill-gold'"
                  />
                </div>
                Home
              </div>
            </router-link>
          </li>
          <!-- About me Link -->
          <li class="flex items-center w-full mb-1">
            <router-link to="/about" v-slot="{ isActive }" class="flex w-full">
              <div
                class="flex py-3 px-2 rounded-xl w-full h-full items-center gap-3 text-white text-sm font-bold hover:bg-primary group"
                :class="isActive ? 'bg-primary' : ''">
                <div
                  class="p-2 rounded-lg group-hover:bg-gold"
                  :class="isActive ? 'bg-gold' : 'bg-primary'">
                  <Icon
                    name="user"
                    class="w-3 h-3 fill-gold group-hover:fill-primary"
                    :class="isActive ? 'fill-primary' : 'fill-gold'"
                  />
                </div>
                Sobre mi
              </div>
            </router-link>  
          </li>
          <!-- Proyects link -->
          <li class="flex items-center w-full mb-1">
            <router-link
              to="/projects"
              v-slot="{ isActive }"
              class="flex w-full">
              <div
                class="flex py-3 px-2 rounded-xl w-full h-full items-center gap-3 text-white text-sm font-bold hover:bg-primary group"
                :class="isActive ? 'bg-primary' : ''">
                <div
                  class="p-2 rounded-lg group-hover:bg-gold"
                  :class="isActive ? 'bg-gold' : 'bg-primary'">
                  <Icon
                    name="suitcase"
                    class="w-3 h-3 fill-gold group-hover:fill-primary"
                    :class="isActive ? 'fill-primary' : 'fill-gold'"
                  />
                </div>
                Proyectos
              </div>
            </router-link>
          </li>
          <!-- Skills -->
          <li class="flex items-center w-full mb-1">
            <router-link to="/skills" v-slot="{ isActive }" class="flex w-full">
              <div
                class="flex py-3 px-2 rounded-xl w-full h-full items-center gap-3 text-white text-sm font-bold hover:bg-primary group"
                :class="isActive ? 'bg-primary' : ''">
                <div
                  class="p-2 rounded-lg group-hover:bg-gold"
                  :class="isActive ? 'bg-gold' : 'bg-primary'">
                  <Icon
                    name="skills"
                    class="w-3 h-3 fill-gold group-hover:fill-primary"
                    :class="isActive ? 'fill-primary' : 'fill-gold'"
                  />
                </div>
                Habilidades
              </div>
            </router-link>
          </li>
          <!-- contactos -->
          <li class="flex items-center w-full mb-1">
            <router-link
              to="/contacts"
              v-slot="{ isActive }"
              class="flex w-full">
              <div
                class="flex py-3 px-2 rounded-xl w-full h-full items-center gap-3 text-white text-sm font-bold hover:bg-primary group"
                :class="isActive ? 'bg-primary' : ''">
                <div
                  class="p-2 rounded-lg group-hover:bg-gold"
                  :class="isActive ? 'bg-gold' : 'bg-primary'">
                  <Icon
                    name="contact"
                    class="w-3 h-3 fill-gold group-hover:fill-primary"
                    :class="isActive ? 'fill-primary' : 'fill-gold'"
                  />
                </div>
                Contactos
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>
<style scoped>
/* transition show form */
.v-enter-from {
  max-height: 0px;
  overflow: hidden;
}

.v-enter-to {
  max-height: 1000px;
  overflow: visible;
}

.v-enter-active,
.v-leave-active {
  transition: all 700ms ease;
}

.v-leave-from {
  max-height: 1000px;
  overflow: visible;
}

.v-leave-to {
  max-height: 0px;
  overflow: hidden;
}
</style>
