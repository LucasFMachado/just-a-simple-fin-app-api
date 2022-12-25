import { requiredMessage } from "@shared/messages";
import { number, object } from "yup";

export const deleteCategorySchema = object().shape({
  params: object({
    id: number()
      .positive(requiredMessage("Category"))
      .required(requiredMessage("Category")),
  }),
});
