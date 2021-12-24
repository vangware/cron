import { stringParseDecimal } from "@vangware/utils";
import type { CronMonthValue } from "../types/CronMonthValue.js";
import type { CronMonthValueNumber } from "../types/CronMonthValueNumber.js";
import type { CronMonthValueString } from "../types/CronMonthValueString.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringMonthValue } from "../validations/isStringMonthValue.js";

/**
 * Parses a string into a `CronMonthValue`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronMonthValue` or `undefined` if invalid.
 */
export const parseStringMonthValue: StringValueParser<
	CronMonthValue
> = source => {
	const valid = isStringMonthValue(source);
	const cronMonthValueNumber = (
		valid ? stringParseDecimal(source) : NaN
	) as CronMonthValueNumber;

	return valid
		? isNaN(cronMonthValueNumber)
			? (source.toLocaleUpperCase() as CronMonthValueString)
			: cronMonthValueNumber
		: undefined;
};
