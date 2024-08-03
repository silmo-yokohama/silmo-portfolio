import { format } from "date-fns";

export const dateFormat = (date, _format = "yyyy.MM.dd") => {
  return format(new Date(date), _format);
};
