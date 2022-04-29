import { RouteRecordRaw } from "vue-router";

const players: Array<RouteRecordRaw> = [
  {
    path: "/players",
    name: "players",
    component: () => import("@/views/players/PlayersList.vue"),
  },
  {
    path: "/players/:id",
    name: "player-page",
    component: () => import("@/views/players/PlayerPage.vue"),
  },
];

export default players;
