import { Competition } from "@/types/competitions/competition-interfaces";
import players from "./players";

const competitions: Competition[] = [
  {
    id: 1,
    name: "Республиканский чемпионат",
    date: "22.06.1997",
    place: "Сыктывкар, Россия",
    players: players,
    rating: 5,
    results: [
      {
        place: "first",
        id: 1,
        name: "Игрок",
        lastName: "Первый",
        middleName: "Игрок",
      },
      {
        place: "second",
        id: 2,
        name: "Игрок",
        lastName: "Второй",
        middleName: "Игрок",
      },
      {
        place: "third",
        id: 3,
        name: "Игрок",
        lastName: "Третий",
        middleName: "Игрок",
      },
    ],
  },
  {
    id: 2,
    name: "Городской чемпионат",
    date: "22.06.1997",
    place: "Сыктывкар, Россия",
    players: players,
    rating: 4,
    results: [
      {
        place: "first",
        id: 4,
        name: "Игрок",
        lastName: "Четвёртый",
        middleName: "Игрок",
      },
      {
        place: "second",
        id: 5,
        name: "Игрок",
        lastName: "Пятый",
        middleName: "Игрок",
      },
      {
        place: "third",
        id: 6,
        name: "Игрок",
        lastName: "Шестой",
        middleName: "Игрок",
      },
    ],
  },
  {
    id: 3,
    name: "Городской чемпионат",
    date: "22.06.1997",
    place: "Ухта, Россия",
    players: players,
    rating: 4,
    results: [
      {
        place: "first",
        id: 7,
        name: "Игрок",
        lastName: "Седьмой",
        middleName: "Игрок",
      },
      {
        place: "second",
        id: 8,
        name: "Игрок",
        lastName: "Восьмой",
        middleName: "Игрок",
      },
      {
        place: "third",
        id: 9,
        name: "Игрок",
        lastName: "Девятый",
        middleName: "Игрок",
      },
    ],
  },
];

export default competitions;
