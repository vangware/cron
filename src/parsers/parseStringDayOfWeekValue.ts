import { stringParseDecimal } from "@vangware/utils";
import type { CronDayOfWeekValue } from "../types/CronDayOfWeekValue.js";
import type { CronDayOfWeekValueNumber } from "../types/CronDayOfWeekValueNumber.js";
import type { CronDayOfWeekValueString } from "../types/CronDayOfWeekValueString.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringDayOfWeekValue } from "../validations/isStringDayOfWeekValue.js";

/**
 * Parses a string into a `CronDayOfWeekValue`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronDayOfWeekValue` or `undefined` if invalid.
 */
export const parseStringDayOfWeekValue: StringValueParser<
	CronDayOfWeekValue
> = source => {
	const valid = isStringDayOfWeekValue(source);
	const cronDayOfWeekValueNumber = (
		valid ? stringParseDecimal(source) : NaN
	) as CronDayOfWeekValueNumber;

	return valid
		? isNaN(cronDayOfWeekValueNumber)
			? (source.toLocaleUpperCase() as CronDayOfWeekValueString)
			: cronDayOfWeekValueNumber
		: undefined;
};
