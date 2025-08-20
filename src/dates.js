import { format } from "date-fns";

export function createFormattedDate(
	month,
	day,
	year = new Date().getFullYear()
) {
	const date = new Date(year, month, day);
	return format(date, "MM/dd/yyyy");
}
