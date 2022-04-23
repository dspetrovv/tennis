<template>
  <div class="player-info">
    <div class="player-info__block player__photo_popup">
      <img :src="require(`@/assets/images/${img}.png`)" alt="avatar" />
    </div>
    <div class="player-info__block">
      <h2 class="player-score__name">{{ name }}</h2>
      <div class="player-score">
        <div
          :class="`player-score__result
            ${
              isScoreSet
                ? isWinner
                  ? 'player-score__result_win'
                  : 'player-score__result_lose'
                : ''
            }`"
        >
          {{
            !isScoreSet
              ? "Результат"
              : parseInt(score, 10) === 3
              ? "Победил"
              : "Проиграл"
          }}
        </div>
        <div class="player-score__points">
          {{ !isScoreSet ? "-" : score }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
    img: {
      type: String as PropType<string>,
      required: true,
    },
    score: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const isScoreSet = ref<boolean>(props.score !== "-");
    function getIsWinner(score: string) {
      return isScoreSet.value && parseInt(score, 10) === 3;
    }
    const isWinner = ref<boolean>(getIsWinner(props.score));

    return {
      isScoreSet,
      isWinner,
      getIsWinner,
    };
  },

  watch: {
    score(currentScore) {
      console.log(1);
      this.isScoreSet = currentScore !== "-";
      this.isWinner = this.getIsWinner(currentScore);
    },
  },
});
</script>
