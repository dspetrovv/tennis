import { RouteRecordRaw } from "vue-router";

const schools: Array<RouteRecordRaw> = [
  {
    path: "/schools",
    name: "schools",
    component: () => import("@/views/sport/SportSchoolsList.vue"),
  },
  // {
  //   path: "/schools/:id",
  //   name: "school-page",
  //   component: () => import("@/views/sport/SportSchoolPage.vue"),
  // },
];

export default schools;
