import { stringParseDecimal } from "@vangware/utils";
import type { CronMinutesValue } from "../types/CronMinutesValue.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringMinutesValue } from "../validations/isStringMinutesValue.js";

/**
 * Parses a string into a `CronMinutesValue`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronMinutesValue` or `undefined` if invalid.
 */
export const parseStringMinutesValue: StringValueParser<
	CronMinutesValue
> = source =>
	isStringMinutesValue(source)
		? (stringParseDecimal(source) as CronMinutesValue)
		: undefined;
