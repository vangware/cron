import { stringParseDecimal } from "@vangware/utils";
import type { CronDayOfMonthValue } from "../types/CronDayOfMonthValue";
import type { StringValueParser } from "../types/StringValueParser";
import { isStringDayOfMonthValue } from "../validations/isStringDayOfMonthValue";

/**
 * Parses a string into a `CronDayOfMonthValue`.
 * @param source string to be parsed.
 * @returns A `CronDayOfMonthValue` or `undefined` if invalid.
 */
// eslint-disable-next-line max-len
export const parseStringDayOfMonthValue: StringValueParser<CronDayOfMonthValue> = source =>
	isStringDayOfMonthValue(source)
		? (stringParseDecimal(source) as CronDayOfMonthValue)
		: undefined;
