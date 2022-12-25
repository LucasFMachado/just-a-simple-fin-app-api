import { incorrectMessage, requiredMessage } from "@shared/messages";
import { number, object, string } from "yup";

export const updateUserSchema = object().shape({
  body: object({
    name: string().required(requiredMessage("Name")),
    email: string()
      .email(incorrectMessage("Email"))
      .required(requiredMessage("Email")),
  }),
  params: object({
    id: number()
      .positive(requiredMessage("User"))
      .required(requiredMessage("User")),
  }),
});
