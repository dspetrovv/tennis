import { defineStore } from "pinia";
import competitions from "@/data/competitions";
import { CompetitionsStore } from "@/types/competitions/competition-interfaces";
import { setPlayers } from "./tmp/fill-froups";

export const useCompetitionsStore = defineStore("competitions", {
  state: (): CompetitionsStore => ({
    competitions: [],
    isLoadingCompetitions: true,
    groups: [[]],
    isLoadingGroups: true,
  }),

  actions: {
    getCompetitions() {
      this.isLoadingCompetitions = true;
      this.competitions = competitions;
      this.isLoadingCompetitions = false;
      console.log(this.competitions);
    },

    getGroups() {
      this.isLoadingGroups = true;
      this.groups = setPlayers();
      this.isLoadingGroups = false;
    },
  },
});
