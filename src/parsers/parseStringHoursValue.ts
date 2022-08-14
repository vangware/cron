import { parseDecimal } from "@vangware/parsers";
import type { CronHoursValue } from "../types/CronHoursValue.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringHoursValue } from "../validations/isStringHoursValue.js";

/**
 * Parses a string into a `CronHoursValue`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringHoursValue("10"); // 10
 * parseStringHoursValue("25"); // undefined
 * ```
 * @param source string to be parsed.
 * @returns A `CronHoursValue` or `undefined` if invalid.
 */
export const parseStringHoursValue: StringValueParser<
	CronHoursValue
> = source =>
	isStringHoursValue(source)
		? (parseDecimal(source) as CronHoursValue)
		: undefined;
