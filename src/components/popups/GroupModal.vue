<template>
  <main-modal
    :is-opened="isOpened"
    :popup-class="popupClass"
    @close-modal="closeModal"
  >
    <template #header>
      <h3>{{ pair[0].shortName }} - {{ pair[1].shortName }}</h3>
    </template>

    <template #body>
      <pair-player-block
        :name="pair[0].shortName"
        :img="pair[0].img"
        :score="firstPlayerScore"
      />
      <div v-if="!areGroupsClosed" class="score-buttons">
        <div v-for="score in scores" :key="score" class="score__button">
          <radio-button
            :button-id="score"
            :buttons-name="'scored'"
            :is-checked="false"
            :value="score"
            @switch-value="changeScore"
          >
            <template #button-text>{{ score }}</template>
          </radio-button>
        </div>
      </div>
      <pair-player-block
        :name="pair[1].shortName"
        :img="pair[1].img"
        :score="secondPlayerScore"
      />
    </template>

    <template #footer>
      <div
        v-if="!areGroupsClosed"
        :class="`btn btn_success${firstPlayerScore === '-' ? '-disabled' : ''}`"
        @click="sendScore"
      >
        Accept
      </div>
      <div class="btn" @click="closeModal">Cancel</div>
    </template>
  </main-modal>
</template>
<script lang="ts">
import { useCompetitionsStore } from "@/store/useCompetitions";
import { ShortPair } from "@/types/competitions/competition-interfaces";
import { storeToRefs } from "pinia";
import { computed, defineComponent, PropType, ref } from "vue";
import RadioButton from "../buttons/RadioButton.vue";
import PairPlayerBlock from "../PairPlayerBlock.vue";
import MainModal from "./MainModal.vue";

export default defineComponent({
  components: { MainModal, RadioButton, PairPlayerBlock },
  props: {
    pair: {
      type: Array as PropType<ShortPair[]>,
      required: true,
    },
    isOpened: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
  emits: ["acceptScore", "closeModal"],

  setup(props, { emit }) {
    const scores = ["3-2", "3-1", "3-0", "0-3", "1-3", "2-3"];
    function getScore(pair: ShortPair, idx: number) {
      if (pair.score.length > 2) {
        return pair.score[idx];
      }
      return pair.score;
    }
    const firstPlayerScore = ref<string>(getScore(props.pair[0], 0));
    const secondPlayerScore = ref<string>(getScore(props.pair[1], 2));

    const competitionsStore = useCompetitionsStore();
    const { areGroupsClosed } = storeToRefs(competitionsStore);

    function changeScore(score: string) {
      const scoreAsArray = score.split("-");
      firstPlayerScore.value = scoreAsArray[0];
      secondPlayerScore.value = scoreAsArray[1];
      console.log(score);
    }

    function closeModal() {
      emit("closeModal");
    }
    const popupClass = computed(() => {
      return areGroupsClosed ? `popup-pair_closed` : `popup-pair`;
    });

    function sendScore() {
      if (firstPlayerScore.value === "-" && secondPlayerScore.value === "-") {
        return;
      }
      emit(
        "acceptScore",
        [
          {
            ...props.pair[0],
            score: `${firstPlayerScore.value}-${secondPlayerScore.value}`,
          },
          {
            ...props.pair[1],
            score: `${secondPlayerScore.value}-${firstPlayerScore.value}`,
          },
        ],
        props.pair[0].score
      );
      closeModal();
    }

    return {
      scores,
      firstPlayerScore,
      secondPlayerScore,
      areGroupsClosed,
      popupClass,
      closeModal,
      changeScore,
      sendScore,
    };
  },
});
</script>
