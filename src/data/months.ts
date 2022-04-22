import { MonthOrYear as Month } from "@/types/globals";
const currentMonth = new Date().getMonth();

const months: Month[] = [
  {
    id: 1,
    name: "January",
    selected: currentMonth === 0,
  },
  {
    id: 2,
    name: "February",
    selected: currentMonth === 1,
  },
  {
    id: 3,
    name: "March",
    selected: currentMonth === 2,
  },
  {
    id: 4,
    name: "April",
    selected: currentMonth === 3,
  },
  {
    id: 5,
    name: "May",
    selected: currentMonth === 4,
  },
  {
    id: 6,
    name: "June",
    selected: currentMonth === 5,
  },
  {
    id: 7,
    name: "July",
    selected: currentMonth === 6,
  },
  {
    id: 8,
    name: "August",
    selected: currentMonth === 7,
  },
  {
    id: 9,
    name: "September",
    selected: currentMonth === 8,
  },
  {
    id: 10,
    name: "October",
    selected: currentMonth === 9,
  },
  {
    id: 11,
    name: "November",
    selected: currentMonth === 10,
  },
  {
    id: 12,
    name: "December",
    selected: currentMonth === 11,
  },
];

export default months;
