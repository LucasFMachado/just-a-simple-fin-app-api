import { requiredMessage } from "@shared/messages";
import { number, object } from "yup";

export const deleteTransactionSchema = object().shape({
  params: object({
    id: number()
      .positive(requiredMessage("Transaction"))
      .required(requiredMessage("Transaction")),
  }),
});
