import { parseDecimal } from "@vangware/parsers";
import type { CronMinutesValue } from "../types/CronMinutesValue.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringMinutesValue } from "../validations/isStringMinutesValue.js";

/**
 * Parses a string into a `CronMinutesValue`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronMinutesValue` or `undefined` if invalid.
 * @example
 */
export const parseStringMinutesValue: StringValueParser<
	CronMinutesValue
> = source =>
	isStringMinutesValue(source)
		? (parseDecimal(source) as CronMinutesValue)
		: undefined;
