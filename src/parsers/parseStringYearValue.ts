import { stringParseDecimal } from "@vangware/utils";
import type { CronYearValue } from "../types/CronYearValue";
import type { StringValueParser } from "../types/StringValueParser";
import { isStringYearValue } from "../validations/isStringYearValue";

/**
 * Parses a string into a `CronYearValue`.
 * @param source string to be parsed.
 * @returns A `CronYearValue` or `undefined` if invalid.
 */
export const parseStringYearValue: StringValueParser<CronYearValue> = source =>
	isStringYearValue(source)
		? (stringParseDecimal(source) as CronYearValue)
		: undefined;
