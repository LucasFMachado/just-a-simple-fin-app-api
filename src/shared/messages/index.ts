export const requiredMessage = (field_name: string) =>
  `${field_name} is not defined!`;

export const incorrectMessage = (field_name: string) =>
  `${field_name} is incorrect format!`;

export const notExistsMessage = (field_name: string) =>
  `${field_name} does not exists!`;

export const alreadyExistsMessage = (field_name: string) =>
  `${field_name} already exists!`;

export const notMatchMessage = (field_name: string) =>
  `${field_name} does not match!`;

export const authErrorMessage = () => "Email or password incorrect!";

export const tokenMissingMessage = () => "Token missing!";

export const invalidTokenMessage = () => "Invalid token!";
