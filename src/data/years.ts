import { MonthOrYear as Year } from "@/types/globals";
const currentYear = new Date().getFullYear();

const years: Year[] = [
  {
    id: 1,
    name: "2019",
    selected: currentYear === 2019,
  },
  {
    id: 2,
    name: "2020",
    selected: currentYear === 2020,
  },
  {
    id: 3,
    name: "2021",
    selected: currentYear === 2021,
  },
  {
    id: 4,
    name: "2022",
    selected: currentYear === 2022,
  },
];

export default years;
