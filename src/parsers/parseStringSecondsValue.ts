import { parseDecimal } from "@vangware/parsers";
import type { CronSecondsValue } from "../types/CronSecondsValue.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringSecondsValue } from "../validations/isStringSecondsValue.js";

/**
 * Parses a string into a `CronSecondsValue`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringSecondsValue("10"); // 10
 * parseStringSecondsValue("61"); // undefined
 * ```
 * @param source string to be parsed.
 * @returns A `CronSecondsValue` or `undefined` if invalid.
 */
export const parseStringSecondsValue: StringValueParser<
	CronSecondsValue
> = source =>
	isStringSecondsValue(source)
		? (parseDecimal(source) as CronSecondsValue)
		: undefined;
