<template>
  <div class="App">
    <nav-bar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./views/NavBar.vue";

export default defineComponent({
  components: { NavBar },
});
</script>
