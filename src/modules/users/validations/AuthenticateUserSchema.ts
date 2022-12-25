import { incorrectMessage, requiredMessage } from "@shared/messages";
import { object, string } from "yup";

export const authenticateUserSchema = object().shape({
  body: object({
    email: string()
      .email(incorrectMessage("Email"))
      .required(requiredMessage("Email")),
    password: string().required(requiredMessage("Password")),
  }),
});
