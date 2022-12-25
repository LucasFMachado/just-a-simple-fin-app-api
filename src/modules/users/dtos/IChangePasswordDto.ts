interface IChangePasswordDto {
  id: number;
  old_password: string;
  new_password: string;
  new_password_confirm: string;
}

export { IChangePasswordDto };
