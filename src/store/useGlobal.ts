import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    pageTitle: "" as string,
  }),

  actions: {
    setPageTitle(name: string) {
      this.pageTitle = name;
      document.title = name;
    },
  },
});
