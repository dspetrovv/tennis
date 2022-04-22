import { RouteRecordRaw } from "vue-router";

const competitions: Array<RouteRecordRaw> = [
  {
    path: "/competitions",
    name: "competitions",
    component: () => import("@/views/competitions/CompetitionsList.vue"),
  },
  // {
  //   path: "competitions/:id",
  //   name: "game-lobby",
  //   component: () => import("@/views/matches/CompetitionPage.vue"),
  //   props: true,
  // },
];

export default competitions;
