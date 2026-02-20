import bycrpt from "bcrypt";

export const hashedPassword = (password) => {
  return bycrpt.hash(password, 10);
};
