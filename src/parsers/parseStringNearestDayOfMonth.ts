import { stringParseDecimal } from "@vangware/utils";
import { CronNearestDayOfMonth } from "../types/CronNearestDayOfMonth";
import { isStringNearestDayOfMonth } from "../validations/isStringNearestDayOfMonth";

/**
 * Parses a string into a `CronNearestDayOfMonth`.
 * @param source string to be parsed.
 * @returns A `CronNearestDayOfMonth` or `undefined` if invalid.
 */
export const parseStringNearestDayOfMonth = (source: string) =>
	isStringNearestDayOfMonth(source)
		? ({ nearest: stringParseDecimal(source) } as CronNearestDayOfMonth)
		: undefined;
