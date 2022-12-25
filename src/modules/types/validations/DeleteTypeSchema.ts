import { requiredMessage } from "@shared/messages";
import { number, object } from "yup";

export const deleteTypeSchema = object().shape({
  params: object({
    id: number()
      .positive(requiredMessage("Type"))
      .required(requiredMessage("Type")),
  }),
});
