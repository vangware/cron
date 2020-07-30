import { stringParseDecimal } from "@vangware/utils";
import { CronMinutesValue } from "../types/CronMinutesValue";
import { StringValueParser } from "../types/StringValueParser";
import { isStringMinutesValue } from "../validations/isStringMinutesValue";

/*
 * Parses given source string to CronMinutesValue.
 * @param source Source string to be parsed.
 */
// eslint-disable-next-line max-len
export const parseStringMinutesValue: StringValueParser<CronMinutesValue> = source =>
	isStringMinutesValue(source)
		? (stringParseDecimal(source) as CronMinutesValue)
		: undefined;
