import { requiredMessage } from "@shared/messages";
import { boolean, number, object, string } from "yup";

export const updateTypeSchema = object().shape({
  body: object({
    title: string().required(requiredMessage("Title")),
    active: boolean().required(requiredMessage("Active flag")),
  }),
  params: object({
    id: number()
      .positive(requiredMessage("Type"))
      .required(requiredMessage("Type")),
  }),
});
