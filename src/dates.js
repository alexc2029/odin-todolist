import { format, parseISO } from "date-fns";

export function createDate(month, day, year = new Date().getFullYear()) {
	let date = new Date(year, month, day);
	return new Date(date.getTime() - date.getTimezoneOffset() * -60000);
}

export function formatDate(date) {
	return format(date, "MM/dd/yyyy");
}
