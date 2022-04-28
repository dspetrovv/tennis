<template>
  <div class="card final-fourth">
    <!-- Cycle -->
    <div class="stage-final">
      <match-block />
    </div>
    <!-- ----- -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MatchBlock from "../MatchBlock.vue";

export default defineComponent({
  components: { MatchBlock },
});
</script>
