import players from "@/data/players";
import {
  CompetitionPlayer,
  Pair,
} from "@/types/competitions/competition-interfaces";

function setPlayers() {
  const participants: CompetitionPlayer[] = [];
  players.sort((playerA, playerPrev) => {
    if (playerA.rating > playerPrev.rating) {
      return 1;
    }
    if (playerA.rating < playerPrev.rating) {
      return -1;
    }
    return 0;
  });
  players.forEach((player) => {
    participants.push(player);
  });

  const countOfTables = 2;
  const groups = new Array(countOfTables);
  const arrOfTables: CompetitionPlayer[][] = [[]];
  let j = 0;
  let forward = true;
  let reverse = false;
  let newArray = true;
  let groupNumber = 1;

  for (let i = 0; i < participants.length; i++) {
    arrOfTables[j].push(participants[i]);
    if (j === 0 && reverse) {
      reverse = false;
      forward = true;
    } else if (j === countOfTables - 1 && forward) {
      reverse = true;
      forward = false;
      newArray = false;
    } else {
      j = forward ? j + 1 : j - 1;
      if (newArray) {
        arrOfTables[j] = [];
      }
    }
  }

  arrOfTables.forEach((table) => {
    groups[groupNumber - 1] = [];
    for (let i = 0; i < table.length; i++) {
      for (let j = i + 1; j < table.length; j++) {
        //Check post
        groups[groupNumber - 1].push(
          createGroupStage(1, table[i], table[j], groupNumber)
        );
      }
    }
    groupNumber++;
  });
  console.log(
    "my",
    groups[0].filter((pair: Pair) => pair.user1.id === 1 || pair.user2.id === 1)
  );
  return groups;
  // const temp1 = groups[0].map((player) => player.user1.id);
  // const temp2 = groups[0].map((player) => player.user2.id);
  // console.log("players", new Set([...temp1, ...temp2]));
  // const temp3 = groups[1].map((player) => player.user1.id);
  // const temp4 = groups[1].map((player) => player.user2.id);
  // console.log("players", new Set([...temp3, ...temp4]));
  // console.log("arrOfTables", groups);
}

function createGroupStage(
  id_competition: number,
  iduser1: CompetitionPlayer,
  iduser2: CompetitionPlayer,
  number: number
) {
  const newGroup = {
    idcompet: id_competition,
    user1: iduser1,
    score: "-",
    user2: iduser2,
    groupnumber: number,
  };
  return newGroup;
}

export { setPlayers };
