<template>
  <div id="years-tabs" class="tabs">
    <radio-button
      v-for="year in years"
      :key="year.id"
      :buttons-name="'years'"
      :buttonId="`year-${year.name}`"
      :isChecked="year.selected"
      :value="year.name"
      @switch-value="selectYear"
    >
      <template #button-text>{{ year.name }}</template>
    </radio-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, toRef } from "vue";
import { MonthOrYear as Year } from "@/types/globals";
import { openTabs } from "../functions/competitions-tabs-functions";
import RadioButton from "./buttons/RadioButton.vue";

/* eslint-disable no-undef */
export default defineComponent({
  components: { RadioButton },
  props: {
    yearsArray: {
      type: Array as PropType<Year[]>,
      required: true,
    },
    selectedYear: {
      type: Object as PropType<Year>,
      required: true,
    },
  },
  emits: ["selectActiveYear"],

  setup(props, { emit }) {
    const years = toRef(props, "yearsArray");

    function selectYear(yearName: string) {
      emit(
        "selectActiveYear",
        years.value.find((year) => year.name === yearName),
        "years"
      );
    }

    return {
      years,
      selectYear,
      openTabs,
    };
  },
});
</script>
