import {
  CompetitionPlayer,
  Pair,
  ShortPair,
} from "@/types/competitions/competition-interfaces";
import { generateShortName } from "@/functions/user-functions";
import { computed, ref } from "vue";

function useCompetitionsGroups(props: any) {
  function getGroupPlayers() {
    const temp1 = props.players.map((player: Pair) => player.user1.id);
    const temp2 = props.players.map((player: Pair) => player.user2.id);
    console.log("GroupPlayers", [...new Set([...temp1, ...temp2])]);
    return [...new Set([...temp1, ...temp2])];
  }
  const groupPlayers = ref<number[]>(getGroupPlayers());

  function getRow(players: Pair[], playerNumber: number) {
    console.log("number", playerNumber);
    const newRow = players.filter(
      (player) =>
        player.user1.id === playerNumber || player.user2.id === playerNumber
    );
    return newRow;
  }

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
  const rows = computed(() => {
    return groupPlayers.value.map((player) => getRow(props.players, player));
  });

  return {
    groupPlayers,
    getName,
    rows,
    setPair,
    getSets,
    getPoints,
  };
}

export default useCompetitionsGroups;
