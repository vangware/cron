import { stringParseDecimal } from "@vangware/utils";
import type { CronMonthValue } from "../types/CronMonthValue";
import type { CronMonthValueNumber } from "../types/CronMonthValueNumber";
import type { CronMonthValueString } from "../types/CronMonthValueString";
import type { StringValueParser } from "../types/StringValueParser";
import { isStringMonthValue } from "../validations/isStringMonthValue";

/**
 * Parses a string into a `CronMonthValue`.
 * @param source string to be parsed.
 * @returns A `CronMonthValue` or `undefined` if invalid.
 */
export const parseStringMonthValue: StringValueParser<CronMonthValue> =
	source => {
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
