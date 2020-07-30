import { stringParseDecimal } from "@vangware/utils";
import { CronDayOfMonthValue } from "../types/CronDayOfMonthValue";
import { StringValueParser } from "../types/StringValueParser";
import { isStringDayOfMonthValue } from "../validations/isStringDayOfMonthValue";

/*
 * Parses given source string to CronDayOfMonthValue.
 * @param source Source string to be parsed.
 */
// eslint-disable-next-line max-len
export const parseStringDayOfMonthValue: StringValueParser<CronDayOfMonthValue> = source =>
	isStringDayOfMonthValue(source)
		? (stringParseDecimal(source) as CronDayOfMonthValue)
		: undefined;
