import * as Yup from "yup";
import dayjs from "dayjs";

const currentDate = dayjs();

export const todoValidationSchema = Yup.object({
  tittle: Yup.string()
    .required()
    .max(50, "Tittle must be at max of 50 characters.")
    .trim(),
  description: Yup.string()
    .required()
    .trim()
    .max(60, "Description must be at max of 60 character."),
  date: Yup.date().required().min(currentDate, "Date cannot be past dates."),
});
