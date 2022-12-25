import { requiredMessage } from "@shared/messages";
import { number, object } from "yup";

export const getOneTypeSchema = object().shape({
  params: object({
    id: number()
      .positive(requiredMessage("Type"))
      .required(requiredMessage("Type")),
  }),
});
