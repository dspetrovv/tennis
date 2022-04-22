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

interface CompetitionsStore {
  competitions: Competition[];
  groups: Pair[][];
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
  CompetitionsStore,
  // Group,
  Pair,
  ShortPair,
};
