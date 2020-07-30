import { stringParseDecimal } from "@vangware/utils";
import { CronYearValue } from "../types/CronYearValue";
import { StringValueParser } from "../types/StringValueParser";
import { isStringYearValue } from "../validations/isStringYearValue";

/**
 * Parses a string into a `CronYearValue`.
 * @param source string to be parsed.
 * @returns A `CronYearValue` or `undefined` if invalid.
 */
// eslint-disable-next-line max-len
export const parseStringYearValue: StringValueParser<CronYearValue> = source =>
	isStringYearValue(source)
		? (stringParseDecimal(source) as CronYearValue)
		: undefined;
