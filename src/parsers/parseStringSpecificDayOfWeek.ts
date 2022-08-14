import { parseDecimal } from "@vangware/parsers";
import { CRON_SPECIFIC_SEPARATOR } from "../constants.js";
import type { CronDayOfWeekValueNumber } from "../types/CronDayOfWeekValueNumber.js";
import type { CronSpecificDayOfWeek } from "../types/CronSpecificDayOfWeek.js";
import type { CronWeekValue } from "../types/CronWeekValue.js";
import { isStringSpecificDayOfWeek } from "../validations/isStringSpecificDayOfWeek.js";

/**
 * Parses a string into a `CronSpecificDayOfWeek`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronSpecificDayOfWeek` or `undefined` if invalid.
 * @example
 */
export const parseStringSpecificDayOfWeek = (
	source: string,
): CronSpecificDayOfWeek | undefined => {
	const valid = isStringSpecificDayOfWeek(source);
	const [dayString = "", weekString = ""] = valid
		? source.split(CRON_SPECIFIC_SEPARATOR)
		: [];

	return valid
		? {
				day: parseDecimal(dayString) as CronDayOfWeekValueNumber,
				week: parseDecimal(weekString) as CronWeekValue,
		  }
		: undefined;
};
