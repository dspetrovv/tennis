<template>
  <section>
    <div class="player-statistics">
      <div class="statistics">
        <div class="statistics__block">
          <h2>Статистика</h2>
          <div class="statistics-generals">
            <div>
              <strong>Турниров сыграно</strong>
              <span>100</span>
            </div>
            <div>
              <strong>Матчей сыграно</strong>
              <span>1001</span>
            </div>
            <div>
              <strong>Выиграно розыгрышей</strong>
              <span>752259</span>
            </div>
            <div>
              <strong>Проиграно розыгрышей</strong>
              <span>685234</span>
            </div>
          </div>
        </div>
        <div class="statistics__block">
          <button class="btn btn_small" style="float: right">
            Показать все
          </button>
          <h2>Статистика матчей</h2>
          <div class="player-matches">
            <player-match-card v-if="!pairs.length" />
            <player-match-card
              v-else
              v-for="pair in pairs"
              :key="pair.id"
              :pair="pair"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PlayerMatchCard from "@/components/PlayerMatchCard.vue";
import { PlayerMatch } from "@/types/players/players-interfaces";

export default defineComponent({
  components: { PlayerMatchCard },
  setup() {
    const pairs: PlayerMatch[] = [
      {
        id: 1,
        idcompet: 1,
        competition: "Турнир",
        player: "Второй Игрок Игрок",
        score: "3-2",
      },
      {
        id: 2,
        idcompet: 1,
        competition: "Турнир",
        player: "Третий Игрок Игрок",
        score: "2-3",
      },
      {
        id: 3,
        idcompet: 1,
        competition: "Турнир",
        player: "Третий Игрок Игрок",
        score: "0-3",
      },
    ];

    return {
      pairs,
    };
  },
});
</script>
