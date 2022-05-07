<template>
  <div class="card">
    <div class="card__image">
      <img :src="require(`@/assets/images/${img}.png`)" alt="School" />
    </div>
    <div class="card__body">
      <h2 class="card__title">{{ title }}</h2>
      <div class="card__description">{{ description }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    img: {
      type: String as PropType<string>,
      required: true,
    },
    title: {
      type: String as PropType<string>,
      required: true,
    },
    description: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>
