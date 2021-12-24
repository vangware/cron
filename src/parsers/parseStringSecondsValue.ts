import { stringParseDecimal } from "@vangware/utils";
import type { CronSecondsValue } from "../types/CronSecondsValue.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringSecondsValue } from "../validations/isStringSecondsValue.js";

/**
 * Parses a string into a `CronSecondsValue`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronSecondsValue` or `undefined` if invalid.
 */
export const parseStringSecondsValue: StringValueParser<
	CronSecondsValue
> = source =>
	isStringSecondsValue(source)
		? (stringParseDecimal(source) as CronSecondsValue)
		: undefined;
