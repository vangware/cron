import { stringParseDecimal } from "@vangware/utils";
import { CronSecondsValue } from "../types/CronSecondsValue";
import { StringValueParser } from "../types/StringValueParser";
import { isStringSecondsValue } from "../validations/isStringSecondsValue";

/*
 * Parses given source string to CronSecondsValue.
 * @param source Source string to be parsed.
 */
// eslint-disable-next-line max-len
export const parseStringSecondsValue: StringValueParser<CronSecondsValue> = source =>
	isStringSecondsValue(source)
		? (stringParseDecimal(source) as CronSecondsValue)
		: undefined;
