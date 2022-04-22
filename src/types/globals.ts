interface MonthOrYear {
  id: number;
  name: string;
  selected: boolean;
}

interface Dropdown {
  id: number;
  name: string | number;
  selected: boolean;
}

interface User {
  name: string;
  lastName: string;
  middleName?: string;
}

export { MonthOrYear, Dropdown, User };
