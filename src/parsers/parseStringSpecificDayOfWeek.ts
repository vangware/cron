import { stringParseDecimal } from "@vangware/utils";
import { CRON_SPECIFIC_SEPARATOR } from "../constants";
import { CronDayOfWeekValueNumber } from "../types/CronDayOfWeekValueNumber";
import { CronSpecificDayOfWeek } from "../types/CronSpecificDayOfWeek";
import { CronWeekValue } from "../types/CronWeekValue";
import { isStringSpecificDayOfWeek } from "../validations/isStringSpecificDayOfWeek";

/**
 * Parses a string into a `CronSpecificDayOfWeek`.
 * @param source string to be parsed.
 * @returns A `CronSpecificDayOfWeek` or `undefined` if invalid.
 */
export const parseStringSpecificDayOfWeek = (
	source: string
): CronSpecificDayOfWeek | undefined => {
	const valid = isStringSpecificDayOfWeek(source);
	const [dayString, weekString] = valid
		? source.split(CRON_SPECIFIC_SEPARATOR)
		: [];

	return valid
		? {
				day: stringParseDecimal(dayString) as CronDayOfWeekValueNumber,
				week: stringParseDecimal(weekString) as CronWeekValue
		  }
		: undefined;
};
