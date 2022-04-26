<template>
  <div class="card group">
    <group-modal
      v-if="isOpenedModal"
      :isOpened="isOpenedModal"
      :pair="pair"
      @accept-score="acceptScore"
      @close-modal="toggleModal"
    />

    <h2>Групповая стадия</h2>
    <div v-if="!isLoadingGroups" class="group-tables">
      <div>
        <group-table
          :players="groups[0]"
          :setScore="setScore"
          :isGroupsClosed="false"
          :groupNumber="1"
        />
      </div>
      <div>
        <group-table
          :players="groups[1]"
          :setScore="setScore"
          :isGroupsClosed="false"
          :groupNumber="2"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import GroupTable from "@/components/GroupTable.vue";
import { useCompetitionsStore } from "@/store/useCompetitions";
import { ShortPair } from "@/types/competitions/competition-interfaces";
import { storeToRefs } from "pinia";
import { defineComponent, onMounted, ref } from "vue";
import GroupModal from "@/components/popups/GroupModal.vue";

export default defineComponent({
  components: { GroupTable, GroupModal },

  setup() {
    const competitionsStore = useCompetitionsStore();
    const { isLoadingGroups, groups, countOfPlayedPairs } =
      storeToRefs(competitionsStore);
    const pair = ref<ShortPair[]>([
      { id: -1, shortName: "Первый", img: "t-man", score: "-", groupNumber: 1 },
      { id: -2, shortName: "Второй", img: "t-man", score: "-", groupNumber: 1 },
    ]);
    function setScore(newPair: ShortPair[]) {
      pair.value = newPair;
      toggleModal();
    }
    const isOpenedModal = ref<boolean>(false);
    function toggleModal() {
      isOpenedModal.value = !isOpenedModal.value;
    }

    function acceptScore(pair: ShortPair[], prevScore: string) {
      console.log(prevScore);
      const groupNumber = pair[0].groupNumber - 1;
      console.log(groups.value[groupNumber].find((group) => group.idcompet));
      const findIdx = groups.value[groupNumber].findIndex(
        (group) =>
          group.user1.id === pair[0].id && group.user2.id === pair[1].id
      );
      const updatedScore = groups.value[groupNumber].find(
        (group) =>
          group.user1.id === pair[0].id && group.user2.id === pair[1].id
      )!;
      const updatedGroup = [...groups.value];
      updatedGroup[groupNumber][findIdx] = {
        ...updatedScore,
        score: pair[0].score,
      };
      console.log(groups.value.length);
      console.log("updatedScore", updatedScore);
      console.log(pair);
      groups.value = [...updatedGroup];
      if (prevScore === "-") {
        competitionsStore.updateGroupsStatus(pair, groupNumber);
      }
    }

    onMounted(() => {
      competitionsStore.getGroups();
    });

    return {
      isOpenedModal,
      isLoadingGroups,
      groups,
      pair,
      setScore,
      acceptScore,
      toggleModal,
    };
  },
});
</script>
