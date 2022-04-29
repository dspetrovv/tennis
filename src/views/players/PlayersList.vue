<template>
  <div>
    <player-block v-if="isLoadingPlayers" style="margin: auto" />
    <ul v-else class="players-list">
      <player-block
        v-for="(player, idx) in players"
        :key="player.id"
        :player="player"
        :number="idx"
      />
    </ul>
  </div>
</template>
<script lang="ts">
import PlayerBlock from "@/components/PlayerBlock.vue";
import { useGlobalStore } from "@/store/useGlobal";
import { Player } from "@/types/players/players-interfaces";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { PlayerBlock },
  setup() {
    const globalStore = useGlobalStore();
    globalStore.setPageTitle("Игроки");

    const players: Player[] = [
      {
        id: 1,
        name: "Первый Игрок Игрок",
        place: "Syktyvkar",
        photo: "t-man",
        prizes: [
          { name: "Liga", image: "t-man", count: 5 },
          { name: "Liga", image: "t-man", count: 15 },
          { name: "Liga", image: "t-man", count: 4 },
          { name: "City", image: "t-man", count: 2 },
          { name: "City", image: "t-man", count: 1 },
        ],
      },
      {
        id: 1,
        name: "Второй Игрок Игрок",
        place: "Koryazhma",
        photo: "t-man",
        prizes: [
          { name: "Liga", image: "t-man", count: 1 },
          { name: "Liga", image: "t-man", count: 9 },
          { name: "Liga", image: "t-man", count: 8 },
          { name: "City", image: "t-man", count: 3 },
        ],
      },
      {
        id: 1,
        name: "Третий Игрок Игрок",
        place: "Syktyvkar",
        photo: "t-man",
        prizes: [
          { name: "Liga", image: "t-man", count: 1 },
          { name: "Liga", image: "t-man", count: 4 },
          { name: "City", image: "t-man", count: 1 },
          { name: "City", image: "t-man", count: 1 },
        ],
      },
    ];
    const isLoadingPlayers = ref<boolean>(true);
    setTimeout(() => {
      isLoadingPlayers.value = !isLoadingPlayers.value;
    }, 3000);

    return {
      players,
      isLoadingPlayers,
    };
  },
});
</script>
