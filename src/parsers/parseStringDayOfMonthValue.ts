import { parseDecimal } from "@vangware/parsers";
import type { CronDayOfMonthValue } from "../types/CronDayOfMonthValue.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringDayOfMonthValue } from "../validations/isStringDayOfMonthValue.js";

/**
 * Parses a string into a `CronDayOfMonthValue`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringDayOfMonthValue("13"); // 13
 * parseStringDayOfMonthValue("99"); // undefined
 * ```
 * @param source string to be parsed.
 * @returns A `CronDayOfMonthValue` or `undefined` if invalid.
 */
export const parseStringDayOfMonthValue: StringValueParser<
	CronDayOfMonthValue
> = source =>
	isStringDayOfMonthValue(source)
		? (parseDecimal(source) as CronDayOfMonthValue)
		: undefined;
