import { stringParseDecimal } from "@vangware/utils";
import { CronYearValue } from "../types/CronYearValue";
import { StringValueParser } from "../types/StringValueParser";
import { isStringYearValue } from "../validations/isStringYearValue";

/*
 * Parses given source string to CronYearValue.
 * @param source Source string to be parsed.
 */
// eslint-disable-next-line max-len
export const parseStringYearValue: StringValueParser<CronYearValue> = source =>
	isStringYearValue(source)
		? (stringParseDecimal(source) as CronYearValue)
		: undefined;
