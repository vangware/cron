import { parseDecimal } from "@vangware/parsers";
import type { CronDayOfWeekValue } from "../types/CronDayOfWeekValue.js";
import type { CronDayOfWeekValueNumber } from "../types/CronDayOfWeekValueNumber.js";
import type { CronDayOfWeekValueString } from "../types/CronDayOfWeekValueString.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringDayOfWeekValue } from "../validations/isStringDayOfWeekValue.js";

/**
 * Parses a string into a `CronDayOfWeekValue`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringDayOfWeekValue("5"); // 5
 * parseStringDayOfWeekValue("FRI"); // "FRI"
 * parseStringDayOfWeekValue("fri"); // "FRI"
 * parseStringDayOfWeekValue("8"); // undefined
 * parseStringDayOfWeekValue("IDK"); // undefined
 * ```
 * @param source string to be parsed.
 * @returns A `CronDayOfWeekValue` or `undefined` if invalid.
 */
export const parseStringDayOfWeekValue: StringValueParser<
	CronDayOfWeekValue
> = source => {
	const valid = isStringDayOfWeekValue(source);
	const cronDayOfWeekValueNumber = (
		valid ? parseDecimal(source) : NaN
	) as CronDayOfWeekValueNumber;

	return valid
		? isNaN(cronDayOfWeekValueNumber)
			? (source.toLocaleUpperCase() as CronDayOfWeekValueString)
			: cronDayOfWeekValueNumber
		: undefined;
};
