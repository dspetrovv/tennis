import {
  CompetitionPlayer,
  GroupPlayer,
  Pair,
  ShortPair,
} from "@/types/competitions/competition-interfaces";
import { generateShortName } from "@/functions/user-functions";
import { computed, ref } from "vue";
import { useCompetitionsStore } from "@/store/useCompetitions";
import { storeToRefs } from "pinia";

interface props {
  players: Pair[];
  setScore: any;
  isGroupsClosed: boolean;
  groupNumber: number;
}

function useCompetitionsGroups(props: props) {
  const competitionsStore = useCompetitionsStore();
  function getGroupPlayers() {
    const players1 = props.players.map((player: Pair) => player.user1.id);
    const players2 = props.players.map((player: Pair) => player.user2.id);
    const playersIds = [...new Set([...players1, ...players2])];
    const groupPlayers: GroupPlayer[] = [];
    playersIds.forEach((pid) => {
      groupPlayers.push({
        id: pid,
        winPoints: 0,
        losePoints: 0,
        totalPoints: 0,
        koef: 0,
        groupNumber: props.groupNumber,
      });
    });
    console.log("ВЫзываю", groupPlayers);
    competitionsStore.getGroupPlayers(groupPlayers);
    return [...new Set([...players1, ...players2])];
  }

  const { groupPlayers } = storeToRefs(competitionsStore);

  function setPair(
    player: CompetitionPlayer,
    opponent: CompetitionPlayer,
    score: string,
    callback: (pair: ShortPair[]) => void
  ) {
    const newPair = [
      {
        id: player.id,
        shortName: generateShortName(player),
        score,
        img: player.img,
        groupNumber: props.groupNumber,
      },
      {
        id: opponent.id,
        shortName: generateShortName(opponent),
        score,
        img: opponent.img,
        groupNumber: props.groupNumber,
      },
    ];
    callback(newPair);
  }

  function getSets(score: Pair[]) {
    let totalWins = 0;
    let totalLoses = 0;
    score.forEach((pair) => {
      const pairScore = pair.score.split("-");
      totalWins += parseInt(pairScore[0], 10);
      totalLoses += parseInt(pairScore[1], 10);
    });
    return `${totalWins}:${totalLoses}`;
  }

  function getPoints(score: Pair[]) {
    let points = 0;
    score.forEach((pair) => {
      const totalScore = pair.score.split("-");
      points += totalScore[0] > totalScore[1] ? 2 : 1;
    });
    return points;
  }

  function getName(players: Pair[], playerNumber: number) {
    const name = players.find(
      (player) =>
        player.user1.id === playerNumber || player.user2.id === playerNumber
    );
    let user = null;
    if (name!.user1.id === playerNumber) {
      user = name!.user1;
    } else {
      user = name!.user2;
    }
    return generateShortName(user);
  }

  function getRow(players: Pair[], playerNumber: number) {
    // eslint-disable-next-line prefer-rest-params
    const newRow = players.filter(
      (player) =>
        player.user1.id === playerNumber || player.user2.id === playerNumber
    );
    return newRow;
  }
  const rows = computed(() => {
    const arr: any = [];
    groupPlayers.value.forEach((players, idx) => {
      if (idx === props.groupNumber - 1) {
        players.forEach((player) => {
          arr.push(getRow(props.players, player.id));
        });
      }
    });
    return arr;
  });

  getGroupPlayers();
  console.log("rowsrows", `props.groupNumber`, rows.value);

  return {
    getName,
    rows,
    setPair,
    getSets,
    getPoints,
  };
}

export default useCompetitionsGroups;
