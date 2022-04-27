<template>
  <div class="player">
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

export default defineComponent({
  components: { PlayerInfo, PlayerPhotos, PlayerStatistics },
  // setup() {
  // },
});
</script>
