import { hash } from "bcryptjs";

export const hashPassword = async (password: string): Promise<string> => {
  const password_hash = await hash(password, 8);
  return password_hash;
};
