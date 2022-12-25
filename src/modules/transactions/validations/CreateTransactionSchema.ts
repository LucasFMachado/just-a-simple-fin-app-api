import { requiredMessage } from "@shared/messages";
import { number, object, string } from "yup";

export const createTransactionSchema = object().shape({
  body: object({
    title: string().required(requiredMessage("Title")),
    category_id: number()
      .positive(requiredMessage("Category"))
      .required(requiredMessage("Category")),
    amount: number()
      .positive(requiredMessage("Amount"))
      .required(requiredMessage("Amount")),
  }),
});
