import { requiredMessage } from "@shared/messages";
import { number, object } from "yup";

export const deleteUserSchema = object().shape({
  params: object({
    id: number()
      .positive(requiredMessage("User"))
      .required(requiredMessage("User")),
  }),
});
