<template>
  <div class="card group">
    <h2>Групповая стадия</h2>
    <div v-if="groups.length" class="group-tables">
      <group-table
        :players="groups[0]"
        :setScore="setScore"
        :isGroupsClosed="false"
        :groupNumber="1"
      />
      <group-table
        :players="groups[1]"
        :setScore="setScore"
        :isGroupsClosed="false"
        :groupNumber="1"
      />
    </div>
  </div>
</template>
<script lang="ts">
import GroupTable from "@/components/GroupTable.vue";
import { useCompetitionsStore } from "@/store/useCompetitions";
import { Pair } from "@/types/competitions/competition-interfaces";
import { storeToRefs } from "pinia";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  components: { GroupTable },
  emits: ["toggleDialog"],
  setup(props, { emit }) {
    const competitionsStore = useCompetitionsStore();
    const { groups } = storeToRefs(competitionsStore);

    onMounted(() => {
      competitionsStore.getGroups();
    });
    function setScore(pair: Pair) {
      emit("toggleDialog", pair);
    }

    return {
      groups,
      setScore,
    };
  },
});
</script>
