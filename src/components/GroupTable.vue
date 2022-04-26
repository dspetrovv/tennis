<template>
  <table class="group__table">
    <thead>
      <tr>
        <td>№</td>
        <td>Участник</td>

        <td
          v-for="(player, idx) in groupPlayers[groupNumber - 1]"
          :key="player.id"
          class="score"
        >
          {{ idx + 1 }}
        </td>

        <template v-if="areGroupsClosed">
          <td class="sets">Сеты</td>
          <td class="points">Очки</td>
          <td class="place">Место</td>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(groupPlayer, idx) in groupPlayers[groupNumber - 1]"
        :key="idx"
      >
        <td>{{ idx + 1 }}</td>
        <td>{{ getName(players, groupPlayer.id) }}</td>

        <template v-for="(player, index) in rows[idx]" :key="index">
          <td
            v-if="idx !== index"
            :class="player.score === '-' ? 'active' : 'set'"
            @click="setPair(player.user1, player.user2, player.score, setScore)"
          >
            {{
              player.user2.id === groupPlayer.id
                ? player.score.split("").reverse().join("")
                : player.score
            }}
          </td>

          <template v-else>
            <td>&times;</td>
            <td
              :class="player.score === '-' ? 'active' : 'set'"
              @click="
                setPair(player.user1, player.user2, player.score, setScore)
              "
            >
              {{
                player.user2.id === groupPlayer.id
                  ? player.score.split("").reverse().join("")
                  : player.score
              }}
            </td>
          </template>
        </template>
        <td v-if="idx === groupPlayers[groupNumber - 1].length - 1">&times;</td>

        <template v-if="areGroupsClosed">
          <td>{{ groupPlayer.winPoints }}:{{ groupPlayer.losePoints }}</td>
          <td>{{ groupPlayer.totalPoints }}</td>
          <td>{{ groupPlayer.place }}</td>
        </template>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { Pair, ShortPair } from "@/types/competitions/competition-interfaces";
import { defineComponent, PropType } from "vue";
import useCompetitionsGroups from "@/functions/hooks/useCompetitionsGroups";
import { useCompetitionsStore } from "@/store/useCompetitions";
import { storeToRefs } from "pinia";

export default defineComponent({
  props: {
    players: {
      type: Array as PropType<Pair[]>,
      required: true,
    },
    setScore: {
      type: Function as PropType<(newPair: ShortPair[]) => void>,
      required: true,
    },
    isGroupsClosed: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    groupNumber: {
      type: Number as PropType<number>,
      required: true,
    },
  },

  setup(props) {
    console.log("players", props.players);
    const competitionsStore = useCompetitionsStore();
    const { groupPlayers, areGroupsClosed } = storeToRefs(competitionsStore);

    const { getName, rows, setPair, getSets, getPoints } =
      useCompetitionsGroups(props);
    console.log("rows", rows);

    return {
      groupPlayers,
      areGroupsClosed,
      rows,
      getName,
      setPair,
      getSets,
      getPoints,
    };
  },
});
</script>
