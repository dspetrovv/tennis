interface CompetitionResult {
  id: number;
  place: string | number;
  name: string;
  lastName: string;
  middleName: string;
}

interface CompetitionPlayer {
  id: number;
  name: string;
  lastName: string;
  middleName: string;
  rating: number;
  img: string;
}

interface Competition {
  id: number;
  name: string;
  date: string;
  place: string;
  players: CompetitionPlayer[];
  rating: number;
  results: CompetitionResult[];
}

interface Pair {
  id?: number;
  idcompet: number;
  user1: CompetitionPlayer;
  score: string;
  user2: CompetitionPlayer;
  groupnumber: number;
}

interface ShortPair {
  id: number;
  shortName: string;
  img: string;
  score: string;
  groupNumber: number;
  rating?: number;
}

interface GroupPlayer {
  id: number;
  winPoints: number;
  losePoints: number;
  totalPoints: number;
  koef: number;
  groupNumber: number;
  place?: number;
}

// interface Pair {
//   id: number;
//   name: string;
//   img: string;
//   score: string;
// }

export {
  CompetitionResult,
  CompetitionPlayer,
  Competition,
  // Group,
  Pair,
  ShortPair,
  GroupPlayer,
};
