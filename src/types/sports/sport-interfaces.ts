interface SportObjectSocials {
  name: string;
  href: string;
}

interface SportObjectContacts {
  name: string;
  contact: string;
}

interface Coach {
  name: string;
  seniority: number;
  photo: string;
  description: string;
}

export { SportObjectSocials, SportObjectContacts, Coach };
