import { User } from "@/types/globals";

function generateShortName(user: User) {
  return `
    ${user.lastName}
    ${user.name[0]}.
    ${
      user.middleName && user.middleName.length > 0
        ? `${user.middleName[0]}.`
        : ""
    }`;
}

export { generateShortName };
