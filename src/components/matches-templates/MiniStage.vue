<template>
  <div class="card final-third">
    <div class="stage">
      <match-block />
      <match-block />
    </div>
    <div class="stage-final">
      <match-block />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MatchBlock from "../MatchBlock.vue";

export default defineComponent({
  components: { MatchBlock },
});
</script>
