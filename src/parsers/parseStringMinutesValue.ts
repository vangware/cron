import { parseDecimal } from "@vangware/parsers";
import type { CronMinutesValue } from "../types/CronMinutesValue.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringMinutesValue } from "../validations/isStringMinutesValue.js";

/**
 * Parses a string into a `CronMinutesValue`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringMinutesValue("10"); // 10
 * parseStringMinutesValue("61"); // undefined
 * ```
 * @param source string to be parsed.
 * @returns A `CronMinutesValue` or `undefined` if invalid.
 */
export const parseStringMinutesValue: StringValueParser<
	CronMinutesValue
> = source =>
	isStringMinutesValue(source)
		? (parseDecimal(source) as CronMinutesValue)
		: undefined;
