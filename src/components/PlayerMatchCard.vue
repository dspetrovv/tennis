<template>
  <div
    :class="{ 'player__match-card': true, 'player__match-card_loading': !pair }"
  >
    <div class="player__match-card_info">
      <div class="opponent text-ellipsis">
        <template v-if="pair">
          <span>против</span>
          <strong>{{ shortName }}</strong>
        </template>
      </div>
      <div class="tournament text-ellipsis">
        <a v-if="pair" href="/#">{{ pair.competition }}</a>
      </div>
    </div>
    <div class="player__match-card_score">
      <strong v-if="pair">{{ pair.score }}</strong>
    </div>
  </div>
</template>
<script lang="ts">
import { generateShortName } from "@/functions/user-functions";
import { PlayerMatch } from "@/types/players/players-interfaces";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  props: {
    pair: {
      type: Object as PropType<PlayerMatch>,
      require: false,
    },
  },
  setup(props) {
    const shortName = ref<string>("");
    if (props.pair) {
      const name = {
        lastName: props.pair.player.split(" ")[0],
        name: props.pair.player.split(" ")[1],
        middleName: props.pair.player.split(" ")[2],
      };
      shortName.value = generateShortName(name);
    }

    return {
      shortName,
    };
  },
});
</script>
