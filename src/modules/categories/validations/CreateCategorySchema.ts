import { requiredMessage } from "@shared/messages";
import { number, object, string } from "yup";

export const createCategorySchema = object().shape({
  body: object({
    title: string().required(requiredMessage("Title")),
    type_id: number()
      .positive(requiredMessage("Type"))
      .required(requiredMessage("Type")),
  }),
});
