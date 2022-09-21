<template>
  <div>
    <h1>Тренер{{ coaches.length > 1 ? "ы" : "" }}</h1>
    <div class="cards-list_coaches">
      <coach-card
        v-for="(coach, idx) in coaches"
        :key="idx"
        :name="coach.name"
        :photo="coach.photo"
      />
    </div>
  </div>
</template>
<script lang="ts">
import CoachCard from "@/components/cards/CoachCard.vue";
import { Coach } from "@/types/sports/sport-interfaces";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  components: { CoachCard },
  props: {
    coaches: {
      type: Array as PropType<Coach[]>,
      required: true,
    },
  },
});
</script>
