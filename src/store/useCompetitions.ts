import { defineStore } from "pinia";
import competitions from "@/data/competitions";
import { setPlayers } from "./tmp/fill-froups";
import {
  Competition,
  GroupPlayer,
  Pair,
  ShortPair,
} from "@/types/competitions/competition-interfaces";
import {
  setPlaces,
  setTotalPoints,
} from "@/functions/competitions-groups-functions";

export const useCompetitionsStore = defineStore("competitions", {
  state: () => ({
    competitions: [] as Competition[],
    isLoadingCompetitions: true,

    groups: [[]] as Pair[][],
    isLoadingGroups: true,
    groupPlayers: [] as GroupPlayer[][],
    areGroupsClosed: false,

    countOfPairs: 0,
    countOfPlayedPairs: 0,
  }),

  actions: {
    getCompetitions() {
      this.isLoadingCompetitions = true;
      this.competitions = competitions;
      this.isLoadingCompetitions = false;
    },

    getGroups() {
      this.isLoadingGroups = true;
      this.groups = setPlayers();
      this.isLoadingGroups = false;
      this.groups.map((group) => {
        this.countOfPairs += group.length;
      });
      console.log("this.groups", this.countOfPairs);
    },

    updateGroupsStatus(pair: ShortPair[], groupNumber: number) {
      this.countOfPlayedPairs++;
      const firstPlayer = this.groupPlayers[groupNumber].find(
        (player) => player.id === pair[0].id
      );
      const secondPlayer = this.groupPlayers[groupNumber].find(
        (player) => player.id === pair[1].id
      );

      if (pair[0].score[0] === "T" || pair[0].score[0] > pair[0].score[2]) {
        firstPlayer!.winPoints += 1;
        secondPlayer!.losePoints += 1;
      } else {
        secondPlayer!.winPoints += 1;
        firstPlayer!.losePoints += 1;
      }

      if (this.countOfPlayedPairs === this.countOfPairs) {
        this.areGroupsClosed = true;
        setTotalPoints(this.groupPlayers);
        setPlaces(this.groupPlayers, this.groups);
      }
    },

    getGroupPlayers(players: GroupPlayer[]) {
      this.groupPlayers.push(players);
    },
  },
});
