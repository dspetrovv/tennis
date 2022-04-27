import { RouteRecordRaw } from "vue-router";

const players: Array<RouteRecordRaw> = [
  {
    path: "/players",
    name: "players",
    component: () => import("@/views/players/PlayerPage.vue"),
  },
];

export default players;
