<template>
  <div class="card">
    <div class="card__image card__image-coach">
      <img :src="require(`@/assets/images/${avatar}.png`)" alt="Coach" />
    </div>
    <div class="card__main-info">
      <h3>{{ shortName }}</h3>
      <h4>Стаж: {{ experience }}</h4>
    </div>
  </div>
</template>
<script lang="ts">
import { generateShortName } from "@/functions/user-functions";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  props: {
    avatar: {
      type: String as PropType<string>,
      default: "",
    },
    name: {
      type: String as PropType<string>,
      required: true,
    },
    surname: {
      type: String as PropType<string>,
      required: true,
    },
    middlename: {
      type: String as PropType<string>,
      required: false,
    },
    experience: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  setup(props) {
    const shortName = ref<string>(
      generateShortName({
        name: props.name,
        lastName: props.surname,
        middleName: props.middlename,
      })
    );

    return {
      shortName,
    };
  },
});
</script>
