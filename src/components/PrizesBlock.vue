<template>
  <div class="prizes">
    <div
      v-for="(prize, idx) in prizes"
      :key="idx"
      class="prizes__prize"
      :title="prize.name"
    >
      <img
        :src="require(`@/assets/images/${prize.image}.png`)"
        :alt="prize.name"
      />
      <span class="prizes__count">{{ prize.count }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Prize } from "@/types/players/players-interfaces";

export default defineComponent({
  props: {
    prizes: {
      type: Array as PropType<Prize[]>,
      required: true,
    },
  },
});
</script>
