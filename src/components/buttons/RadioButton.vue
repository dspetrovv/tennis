<template>
  <div class="radio-button">
    <input
      type="radio"
      :name="buttonsName"
      :id="`radio-${buttonId}`"
      :checked="isChecked"
      @change="changeButton"
    />
    <label class="btn btn__radio btn_big" :for="`radio-${buttonId}`">
      <slot name="button-text">Button</slot>
    </label>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    buttonsName: {
      type: String as PropType<string>,
      required: true,
    },
    buttonId: {
      type: [Number, String] as PropType<number | string>,
      required: true,
    },
    isChecked: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
    value: {
      type: String as PropType<string>,
      required: true,
    },
  },
  emits: ["switchValue"],
  setup(props, { emit }) {
    function changeButton() {
      emit("switchValue", props.value);
    }

    return { changeButton };
  },
});
</script>
