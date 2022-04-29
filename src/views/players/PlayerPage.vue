<template>
  <div class="player">
    <player-block />
    <player-info />
    <player-statistics />
    <player-photos />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PlayerInfo from "./PlayerInfo.vue";
import PlayerPhotos from "./PlayerPhotos.vue";
import PlayerStatistics from "./PlayerStatistics.vue";
import PlayerBlock from "@/components/PlayerBlock.vue";
import { useGlobalStore } from "@/store/useGlobal";

export default defineComponent({
  components: { PlayerInfo, PlayerPhotos, PlayerStatistics, PlayerBlock },
  setup() {
    const globalStore = useGlobalStore();
    globalStore.setPageTitle("Игрок...");
  },
});
</script>
