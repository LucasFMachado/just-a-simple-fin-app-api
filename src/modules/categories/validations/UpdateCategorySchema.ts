import { requiredMessage } from "@shared/messages";
import { boolean, number, object, string } from "yup";

export const updateCategorySchema = object().shape({
  body: object({
    title: string().required(requiredMessage("Title")),
    type_id: number()
      .positive(requiredMessage("Type"))
      .required(requiredMessage("Type")),
    active: boolean().required(requiredMessage("Active flag")),
  }),
  params: object({
    id: number()
      .positive(requiredMessage("Category"))
      .required(requiredMessage("Category")),
  }),
});
