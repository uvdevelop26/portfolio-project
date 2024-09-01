<script setup>
import { RouterView } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
</script>
<template>
  <main
    class="p-4 bg-primary w-screen h-screen font-Roboto flex flex-col overflow-y-auto gap-4 md:py-4 md:px-8 lg:flex-row lg:py-8"
  >
    <SiteNavigation />

    <!-- Inject the compoents that we call -->
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>
</template>

<style scoped>
.route-enter-from {
  transform: translateY(100px);
  opacity: 0;
}

.route-enter-active,
.route-leave-active {
  transition: all 0.5s ease-out;
}

.route-leave-to {
  transform: translateY(0);
  opacity: 1;
}
</style>
