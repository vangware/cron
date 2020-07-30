import { stringParseDecimal } from "@vangware/utils";
import { CronHoursValue } from "../types/CronHoursValue";
import { StringValueParser } from "../types/StringValueParser";
import { isStringHoursValue } from "../validations/isStringHoursValue";

/*
 * Parses given source string to CronHoursValue.
 * @param source Source string to be parsed.
 */
// eslint-disable-next-line max-len
export const parseStringHoursValue: StringValueParser<CronHoursValue> = source =>
	isStringHoursValue(source)
		? (stringParseDecimal(source) as CronHoursValue)
		: undefined;
