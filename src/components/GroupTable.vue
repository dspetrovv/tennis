<template>
  <table class="group__table">
    <thead>
      <tr>
        <td>№</td>
        <td>Участник</td>

        <td v-for="(player, idx) in groupPlayers" :key="player" class="score">
          {{ idx + 1 }}
        </td>

        <template v-if="isGroupsClosed">
          <td class="sets">Сеты</td>
          <td class="points">Очки</td>
          <td class="place">Место</td>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(playerNumber, idx) in groupPlayers" :key="idx">
        <td>{{ idx + 1 }}</td>
        <td>{{ getName(players, playerNumber) }}</td>

        <template v-for="(player, index) in rows[idx]" :key="index">
          <td
            v-if="idx !== index"
            :class="player.score === '-' ? 'active' : 'set'"
            @click="setPair(player.user1, player.user2, player.score, setScore)"
          >
            {{
              player.user2.id === playerNumber
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
                player.user2.id === playerNumber
                  ? player.score.split("").reverse().join("")
                  : player.score
              }}
            </td>
          </template>
        </template>

        <template v-if="isGroupsClosed">
          <td>{{ getSets(rows) }}</td>
          <td>{{ getPoints(rows) }}</td>
          <td>{{ 0 }}</td>
        </template>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { Pair } from "@/types/competitions/competition-interfaces";
import { defineComponent, PropType } from "vue";
import useCompetitionsGroups from "@/functions/hooks/useCompetitionsGroups";

export default defineComponent({
  props: {
    players: {
      type: Array as PropType<Pair[]>,
      required: true,
    },
    setScore: {
      type: Function,
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

    const { groupPlayers, getName, rows, setPair, getSets, getPoints } =
      useCompetitionsGroups(props);

    return {
      groupPlayers,
      getName,
      rows,
      setPair,
      getSets,
      getPoints,
    };
  },
});
</script>
