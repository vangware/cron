import { stringParseDecimal } from "@vangware/utils";
import type { CronDayOfMonthValue } from "../types/CronDayOfMonthValue.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringDayOfMonthValue } from "../validations/isStringDayOfMonthValue.js";

/**
 * Parses a string into a `CronDayOfMonthValue`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronDayOfMonthValue` or `undefined` if invalid.
 */
// eslint-disable-next-line max-len
export const parseStringDayOfMonthValue: StringValueParser<
	CronDayOfMonthValue
> = source =>
	isStringDayOfMonthValue(source)
		? (stringParseDecimal(source) as CronDayOfMonthValue)
		: undefined;
