import { requiredMessage } from "@shared/messages";
import { number, object, string } from "yup";

export const updateTransactionSchema = object().shape({
  body: object({
    title: string().required(requiredMessage("Title")),
    category_id: number()
      .positive(requiredMessage("Category"))
      .required(requiredMessage("Category")),
    amount: number()
      .positive(requiredMessage("Amount"))
      .required(requiredMessage("Amount")),
  }),
  params: object({
    id: number()
      .positive(requiredMessage("Transaction"))
      .required(requiredMessage("Transaction")),
  }),
});
