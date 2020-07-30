import { stringParseDecimal } from "@vangware/utils";
import { CronHoursValue } from "../types/CronHoursValue";
import { StringValueParser } from "../types/StringValueParser";
import { isStringHoursValue } from "../validations/isStringHoursValue";

/**
 * Parses a string into a `CronHoursValue`.
 * @param source string to be parsed.
 * @returns A `CronHoursValue` or `undefined` if invalid.
 */
// eslint-disable-next-line max-len
export const parseStringHoursValue: StringValueParser<CronHoursValue> = source =>
	isStringHoursValue(source)
		? (stringParseDecimal(source) as CronHoursValue)
		: undefined;
