import { defineStore } from "pinia";
import competitions from "@/data/competitions";
import { CompetitionsStore } from "@/types/competitions/competition-interfaces";
import { setPlayers } from "./tmp/fill-froups";

export const useCompetitionsStore = defineStore("competitions", {
  state: (): CompetitionsStore => ({
    competitions: [],
    groups: [[]],
  }),

  actions: {
    getCompetitions() {
      this.competitions = competitions;
      console.log(this.competitions);
    },

    getGroups() {
      this.groups = setPlayers();
    },
  },
});
