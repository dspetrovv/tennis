<template>
  <div class="competitions__event">
    <div class="general-info">
      <div class="general-info__data">
        <div class="general-info__event_main">{{ date }}</div>
        <div class="general-info__event_stars">
          <div v-for="star in stars" :key="star" class="icon__star">
            <star-icon />
          </div>
        </div>
      </div>
      <div class="general-info__event">
        <span>{{ place }}</span>
        <div class="general-info__event_main">{{ name }}</div>
        <span>Участники:</span>
        <div>
          <a v-for="(player, idx) in sortedPlayers" :key="player.id" href="/#">
            <template v-if="idx < 3">
              {{
                setShortName(player.lastName, player.name, player.middleName)
              }}
            </template>
            <template v-if="idx !== players.length && idx < 2">,</template>
            <template v-if="idx >= 2 && idx !== players.length">,..</template>
          </a>
        </div>
      </div>
    </div>

    <div class="results">
      Результаты:
      <div>
        <table style="margin-top: 0.7rem">
          <tbody>
            <template v-for="(result, idx) in results" :key="result.id">
              <tr>
                <td rowSpan="2">
                  <!-- Need photo -->
                  <div class="cup">
                    <div class="cup_place">{{ idx + 1 }}</div>
                    <div :class="`icon__cup_${result.place}`">
                      <cup-icon />
                    </div>
                  </div>
                </td>
                <td>{{ idx + 1 }} место</td>
              </tr>
              <tr>
                <td>
                  <a href="/#">
                    {{
                      setShortName(
                        result.lastName,
                        result.name,
                        result.middleName
                      )
                    }}
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, toRefs } from "vue";
import {
  CompetitionResult,
  CompetitionPlayer,
} from "@/types/competitions/competition-interfaces";
import StarIcon from "@/components/icons/StarIcon.vue";
import CupIcon from "@/components/icons/CupIcon.vue";

export default defineComponent({
  components: { StarIcon, CupIcon },
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
    date: {
      type: String as PropType<string>,
      required: true,
    },
    place: {
      type: String as PropType<string>,
      required: true,
    },
    players: {
      type: Array as PropType<CompetitionPlayer[]>,
      required: true,
    },
    rating: {
      type: Number as PropType<number>,
      required: true,
    },
    results: {
      type: Array as PropType<CompetitionResult[]>,
      required: true,
    },
  },

  setup(props) {
    const stars = ref<number[]>(
      Array.from({ length: props.rating }, (_, idx) => idx)
    );
    const sortedPlayers = ref<CompetitionPlayer[]>([]);
    function sortPlayers() {
      for (let i = 0; i < props.players.length; i++) {
        if (i === 3) {
          break;
        }
        sortedPlayers.value.push(props.players[i]);
      }
    }

    function setShortName(lastName: string, name: string, middleName: string) {
      return `${lastName} ${name.split("")[0]}.${
        middleName ? `${middleName.split("")[0]}` : ""
      }`;
    }

    sortPlayers();

    return {
      stars,
      sortedPlayers,
      ...toRefs(props),
      setShortName,
    };
  },
});
</script>
