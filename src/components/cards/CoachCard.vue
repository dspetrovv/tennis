<template>
  <div class="card__coach">
    <img :src="require(`@/assets/images/${photo}.png`)" alt="coach" />
    <h3 class="card-coach__name">{{ name }}</h3>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
    photo: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>
