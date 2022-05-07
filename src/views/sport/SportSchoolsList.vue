<template>
  <div class="cards-list_grid">
    <sport-school-card
      v-for="school in schools"
      :key="school.id"
      :img="school.img"
      :title="school.title"
      :description="school.description"
    />
  </div>
</template>
<script lang="ts">
import SportSchoolCard from "@/components/cards/SportSchoolCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { SportSchoolCard },
  setup() {
    const schools = [
      {
        id: 1,
        title: "Title 1",
        description: "Some info about this school",
        img: "t-man",
      },
      {
        id: 2,
        title: "Title 2",
        description: "Some info about this school",
        img: "t-man",
      },
      {
        id: 3,
        title: "Title 3",
        description: "Some info about this school",
        img: "t-man",
      },
      {
        id: 4,
        title: "Title 4",
        description: "Some info about this school",
        img: "t-man",
      },
      {
        id: 5,
        title: "Title 5",
        description: "Some info about this school",
        img: "t-man",
      },
    ];
    return {
      schools,
    };
  },
});
</script>
