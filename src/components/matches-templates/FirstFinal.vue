<template>
  <div
    class="card"
    style="height: 1000px, margin-top: 50px, display: flex, padding: 30px 0"
  >
    <div class="stage">
      <match-block />
      <match-block />
      <match-block />
      <match-block />
      <match-block />
      <match-block />
      <match-block />
      <match-block />
    </div>
    <div class="stage-second">
      <match-block />
      <match-block />
      <match-block />
      <match-block />
    </div>
    <div class="stage-third">
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
