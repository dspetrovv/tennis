<template>
  <transition appear @before-enter="onBeforeEnter" @enter="onEnter">
    <li class="card player-block">
      <div class="player-block__photo">
        <div
          :class="{
            'player-block__photo-box': true,
            'player-block__photo-box_loading': !player,
          }"
        >
          <img
            v-if="player"
            :src="require(`@/assets/images/${player.photo}.png`)"
            alt="photo"
          />
        </div>
      </div>

      <div class="player-block__general-info">
        <div
          :class="{
            'player-block__name': true,
            'player-block__name_loading': !player,
          }"
        >
          <router-link v-if="player" :to="`/players/${player.id}`">
            <span>{{ player.name }}</span>
          </router-link>
          <div
            v-if="player"
            class="player-block__name-place"
            :style="`right: calc((${number.toLocaleString().length} * 10)*1px)`"
          >
            {{ number + 1 }}
          </div>
        </div>
        <div
          :class="{
            'player-block__info': true,
            'player-block__info_loading': !player,
          }"
        >
          <template v-if="player">
            <div class="player-block__info__label">Place</div>
            <div class="player-block__info__label">Awards</div>
            <div style="font-weight: 600">{{ player.place }}</div>
            <prizes-block :prizes="player.prizes" />
          </template>
        </div>
      </div>
    </li>
  </transition>
</template>
<script lang="ts">
import { Player } from "@/types/players/players-interfaces";
import { defineComponent, PropType } from "vue";
import PrizesBlock from "./PrizesBlock.vue";

export default defineComponent({
  components: { PrizesBlock },
  props: {
    player: {
      type: Object as PropType<Player>,
      required: false,
    },
    number: {
      type: Number as PropType<number>,
      required: false,
      default: 0,
    },
  },
  methods: {
    onBeforeEnter(el: HTMLElement) {
      if (!this.number) {
        el.style.zIndex = "50";
        return;
      }
      el.style.zIndex = `${50 - this.number}`;
      el.style.transform = `translateY(calc(${this.number} * (-80px)))`;
    },
    onEnter(el: HTMLElement) {
      if (!this.number) {
        return;
      }
      setTimeout(() => {
        el.style.transform = "translateY(0)";
        this.$nextTick(() => {
          el.style.transform = "";
        });
      });
    },
  },
});
</script>
