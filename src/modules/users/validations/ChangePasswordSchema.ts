import { notMatchMessage, requiredMessage } from "@shared/messages";
import { number, object, ref, string } from "yup";

export const changePasswordSchema = object().shape({
  body: object({
    old_password: string().required(requiredMessage("Old password")),
    new_password: string().required(requiredMessage("New password")),
    new_password_confirm: string()
      .oneOf([ref("new_password")], notMatchMessage("Passwords"))
      .required(requiredMessage("New password confirmation")),
  }),
  params: object({
    id: number()
      .positive(requiredMessage("User"))
      .required(requiredMessage("User")),
  }),
});
