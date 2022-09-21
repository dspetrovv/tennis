interface Player {
  id: number;
  name: string;
  place: string;
  photo: string;
  prizes: Prize[];
}

interface Prize {
  name: string;
  count: number;
  image: string;
}

interface PlayerMatch {
  id: number;
  idcompet: number;
  competition: string;
  player: string;
  score: string;
}

interface Coach {
  id: number;
  name: string;
  surname: string;
  middlename?: string;
  experience: number;
  about: string;
  avatar: string;
}

export { Player, Prize, PlayerMatch, Coach };
