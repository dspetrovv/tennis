<template>
  <div class="App">
    <nav-bar />
    <div class="content">
      <h1>{{ pageTitle }}</h1>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./views/NavBar.vue";
import { useGlobalStore } from "@/store/useGlobal";
import { storeToRefs } from "pinia";

export default defineComponent({
  components: { NavBar },
  setup() {
    const globalStore = useGlobalStore();
    const { pageTitle } = storeToRefs(globalStore);

    return {
      pageTitle,
    };
  },
});
</script>
<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(1);
}
.fade-enter-active {
  transition: all 0.5s ease-out;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.fade-leave-active {
  transition: all 0.5s ease-in;
}
</style>
