<template>
  <div :class="`popup ${isOpened ? 'show' : ''}`">
    <div :class="`popup-window${popupClass?.length ? ` ${popupClass}` : ''}`">
      <div class="popup-header">
        <slot name="header">Header</slot>
        <div class="popup-header__button-close" @click="closePopup">
          <span></span>
        </div>
      </div>
      <div class="popup-body">
        <slot name="body">Body</slot>
      </div>
      <div class="popup-footer">
        <slot name="footer">
          <div class="btn" @click="closePopup">Cancel</div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    isOpened: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
    popupClass: {
      type: String as PropType<string>,
      required: false,
    },
  },
  emit: ["closeModal"],

  setup(props, { emit }) {
    function closePopup() {
      emit("closeModal");
    }

    return {
      closePopup,
    };
  },
});
</script>
