import { requiredMessage } from "@shared/messages";
import { object, string } from "yup";

export const createTypeSchema = object().shape({
  body: object({
    title: string().required(requiredMessage("Title")),
  }),
});
