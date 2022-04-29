<template>
  <div>
    <!-- <PairPopup
      pair={pair}
      isOpened={isOpened}
      togglePopup={togglePopup}
      acceptScore={acceptScore}
    /> -->
    <year-tabs
      v-show="!isMobile"
      :years-array="yearsArray"
      :selected-year="selectedYear"
      @select-active-year="selectDropdownItem"
    />
    <div class="card">
      <month-tabs
        v-show="!isMobile"
        :selected-month="selectedMonth"
        :months-array="monthsArray"
        @select-active-month="selectDropdownItem"
      />

      <div class="dropdowns-tabs">
        <drop-list
          v-show="isMobile"
          :items="yearsArray"
          :items-name="'years'"
          @select-dropdown-item="selectDropdownItem"
        >
          <template #btn-text>
            {{ selectedYear.name }}
          </template>
        </drop-list>

        <drop-list
          v-show="isMobile"
          :items="monthsArray"
          :items-name="'months'"
          @select-dropdown-item="selectDropdownItem"
        >
          <template #btn-text>
            {{ selectedMonth.name }}
          </template>
        </drop-list>
      </div>

      <div v-if="isMobile" class="arrow">
        <div
          :class="`arrow__item_left ${
            isLeftDisabled ? 'arrow__item_disabled' : ''
          }`"
          @click="changeCompetition('left')"
        >
          <arrow-icon />
        </div>
        <div
          :class="`arrow__item_right ${
            isRightDisabled ? 'arrow__item_disabled' : ''
          }`"
          @click="changeCompetition('right')"
        >
          <arrow-icon />
        </div>
      </div>
      <div class="competitions">
        <competitions-event
          v-for="competition in competitions"
          :key="competition.id"
          :name="competition.name"
          :date="competition.date"
          :place="competition.place"
          :players="competition.players"
          :rating="competition.rating"
          :results="competition.results"
        />
      </div>
    </div>
    <competitions-groups />
  </div>
  <!-- <div class="card group">
    <h2>Групповая стадия</h2>
    <div v-if="groupTables.length" class="group-tables">
      <GroupTable
        players={ groupTables[0] }
        setScore={ setScore }
        isGroupsClosed={ false }
        groupNumber={ 1 }
      />
      <GroupTable
        players={ groupTables[1] }
        setScore={ setScore }
        isGroupsClosed={ false }
        groupNumber={ 2 }
      />
    </div>
  </div> -->
  <!-- <div class="card" style="height: 1000px; margin-top: 50px; display: flex; padding: 30px 0;">
    <div class="stage">
      <MatchBlock />
      <MatchBlock />
      <MatchBlock />
      <MatchBlock />
      <MatchBlock />
      <MatchBlock />
      <MatchBlock />
      <MatchBlock />
    </div>
    <div class="stage-second">
      <MatchBlock />
      <MatchBlock />
      <MatchBlock />
      <MatchBlock />
    </div>
    <div class="stage-third">
      <MatchBlock />
      <MatchBlock />
    </div>
    <div class="stage-final">
      <MatchBlock />
    </div>
  </div>
  <div class="card final-second">
    <div class="stage">
      <MatchBlock />
      <MatchBlock />
      <MatchBlock />
      <MatchBlock />
    </div>
    <div class="stage-second">
      <MatchBlock />
      <MatchBlock />
      <MatchBlock />
      <MatchBlock />
    </div>
    <div class="stage-third">
      <MatchBlock />
      <MatchBlock />
    </div>
    <div class="stage-final">
      <MatchBlock />
    </div>
  </div>
  <div class="card final-third">
    <div class="stage">
      <MatchBlock />
      <MatchBlock />
    </div>
    <div class="stage-final">
      <MatchBlock />
    </div>
    <div class="stage">
      <MatchBlock />
      <MatchBlock />
    </div>
    <div class="stage-final">
      <MatchBlock />
    </div>
  </div>
  <div class="card final-fourth">
    <div class="stage-final">
      <MatchBlock />
    </div>
    <div class="stage-final">
      <MatchBlock />
    </div>
    <div class="stage-final">
      <MatchBlock />
    </div>
    <div class="stage-final">
      <MatchBlock />
    </div>
    <div class="stage-final">
      <MatchBlock />
    </div>
    <div class="stage-final">
      <MatchBlock />
    </div>
  </div> -->
</template>
<script lang="ts">
import useMobileArrowButtons from "@/functions/hooks/useMobileArrowButtons";
import { ref, defineComponent, onMounted, computed, nextTick } from "vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import years from "@/data/years";
import months from "@/data/months";
import YearTabs from "@/components/YearTabs.vue";
import MonthTabs from "@/components/MonthTabs.vue";
import { useCompetitionsStore } from "@/store/useCompetitions";
import CompetitionsEvent from "./CompetitionsEvent.vue";
import DropList from "@/components/DropList.vue";
import { Dropdown } from "@/types/globals";
import { initButtons } from "@/functions/competitions-buttons";
import { changeClass } from "@/functions/competitions-tabs-functions";
import CompetitionsGroups from "./CompetitionsGroups.vue";
import { useGlobalStore } from "@/store/useGlobal";

export default defineComponent({
  components: {
    ArrowIcon,
    YearTabs,
    MonthTabs,
    CompetitionsEvent,
    DropList,
    CompetitionsGroups,
  },
  setup() {
    const globalStore = useGlobalStore();
    globalStore.setPageTitle("Соревнования");

    const {
      width,
      isMobile,
      isLeftDisabled,
      isRightDisabled,
      changeCompetition,
    } = useMobileArrowButtons();
    const yearsArray = ref(years);
    const monthsArray = ref(months);
    const selectedYear = computed(() => {
      return yearsArray.value.find((year) => year.selected)!;
    });

    const selectedMonth = computed(() => {
      return monthsArray.value.find((month) => month.selected)!;
    });

    const competitionsStore = useCompetitionsStore();

    const competitions = computed(() => {
      return competitionsStore.competitions;
    });
    onMounted(() => {
      competitionsStore.getCompetitions();
      console.log(competitions.value);
      if (competitions.value.length > 1) {
        isRightDisabled.value = false;
      }
      nextTick(() => {
        const isCard: boolean = width.value > 992;
        const isMedium: boolean = width.value > 540;
        changeClass(width.value, isCard, isMedium);

        if (isMobile.value) {
          initButtons();
        }
      });
    });
    function selectDropdownItem(item: Dropdown, name: string) {
      if (name === "years") {
        let id = yearsArray.value.findIndex((year) => year.selected);
        yearsArray.value[id].selected = false;
        id = yearsArray.value.findIndex((year) => year.id === item.id);
        yearsArray.value[id].selected = true;
      } else if (name === "months") {
        let id = monthsArray.value.findIndex((month) => month.selected);
        monthsArray.value[id].selected = false;
        id = monthsArray.value.findIndex((month) => month.id === item.id);
        monthsArray.value[id].selected = true;
      }
    }

    return {
      yearsArray,
      monthsArray,
      width,
      isMobile,
      isLeftDisabled,
      isRightDisabled,
      competitions,
      selectedYear,
      selectedMonth,
      changeCompetition,
      selectDropdownItem,
    };
  },
});
</script>
