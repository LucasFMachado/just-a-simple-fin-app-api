import {
  incorrectMessage,
  notMatchMessage,
  requiredMessage,
} from "@shared/messages";
import { object, ref, string } from "yup";

export const createUserSchema = object().shape({
  body: object({
    name: string().required(requiredMessage("Name")),
    email: string()
      .email(incorrectMessage("Email"))
      .required(requiredMessage("Email")),
    password: string().required(requiredMessage("Password")),
    password_confirm: string()
      .oneOf([ref("password")], notMatchMessage("Passwords"))
      .required(requiredMessage("Password confirmation")),
  }),
});
