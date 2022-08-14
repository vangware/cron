import { parseDecimal } from "@vangware/parsers";
import type { CronMonthValue } from "../types/CronMonthValue.js";
import type { CronMonthValueNumber } from "../types/CronMonthValueNumber.js";
import type { CronMonthValueString } from "../types/CronMonthValueString.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringMonthValue } from "../validations/isStringMonthValue.js";

/**
 * Parses a string into a `CronMonthValue`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringMonthValue("10"); // 10
 * parseStringMonthValue("OCT"); // "OCT"
 * parseStringMonthValue("oct"); // "OCT"
 * parseStringMonthValue("24"); // undefined
 * parseStringMonthValue("IDK"); // undefined
 * ```
 * @param source string to be parsed.
 * @returns A `CronMonthValue` or `undefined` if invalid.
 */
export const parseStringMonthValue: StringValueParser<
	CronMonthValue
> = source => {
	const valid = isStringMonthValue(source);
	const cronMonthValueNumber = (
		valid ? parseDecimal(source) : NaN
	) as CronMonthValueNumber;

	return valid
		? isNaN(cronMonthValueNumber)
			? (source.toLocaleUpperCase() as CronMonthValueString)
			: cronMonthValueNumber
		: undefined;
};
