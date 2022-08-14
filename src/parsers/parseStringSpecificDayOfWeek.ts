import { parseDecimal } from "@vangware/parsers";
import type { Maybe } from "@vangware/types";
import { CRON_SPECIFIC_SEPARATOR } from "../constants.js";
import type { CronDayOfWeekValueNumber } from "../types/CronDayOfWeekValueNumber.js";
import type { CronSpecificDayOfWeek } from "../types/CronSpecificDayOfWeek.js";
import type { CronWeekValue } from "../types/CronWeekValue.js";
import { isStringSpecificDayOfWeek } from "../validations/isStringSpecificDayOfWeek.js";

/**
 * Parses a string into a `CronSpecificDayOfWeek`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringSpecificDayOfWeek("1#5"); // { day: 1, week: 5 }
 * parseStringSpecificDayOfWeek("INVALID"); // undefined
 * ```
 * @param source string to be parsed.
 * @returns A `CronSpecificDayOfWeek` or `undefined` if invalid.
 */
export const parseStringSpecificDayOfWeek = (
	source: string,
): Maybe<CronSpecificDayOfWeek> => {
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
