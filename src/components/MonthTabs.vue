<template>
  <div id="date-tabs" class="tabs">
    <div class="tab-block">
      <!-- Set selected month -->
      <a
        href="/#"
        class="btn dropdown-btn"
        @click="(evt) => openTabs(evt, 'months')"
        >{{ selectedMonth.name }}</a
      >
      <ul id="months" class="tab-list">
        <li
          v-for="month in monthsArray"
          :key="month.id"
          :class="`tab__item${month.id === selectedMonth.id ? '_active' : ''}`"
          @click="selectMonth(month)"
        >
          {{ month.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MonthOrYear as Month } from "@/types/globals";
import { openTabs } from "../functions/competitions-tabs-functions";

export default defineComponent({
  props: {
    monthsArray: {
      type: Array as PropType<Month[]>,
      required: true,
    },
    selectedMonth: {
      type: Object as PropType<Month>,
      required: true,
    },
  },
  emits: ["selectActiveMonth"],

  setup(props, { emit }) {
    function selectMonth(month: Month) {
      emit("selectActiveMonth", month, "months");
    }

    return {
      selectMonth,
      openTabs,
    };
  },
});
</script>
