interface IAuthenticateUserSuccessDto {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export { IAuthenticateUserSuccessDto };
