import { stringParseDecimal } from "@vangware/utils";
import { CronMonthValue } from "../types/CronMonthValue";
import { CronMonthValueNumber } from "../types/CronMonthValueNumber";
import { CronMonthValueString } from "../types/CronMonthValueString";
import { StringValueParser } from "../types/StringValueParser";
import { isStringMonthValue } from "../validations/isStringMonthValue";

/*
 * Parses given source string to CronMonthValue.
 * @param source Source string to be parsed.
 */
// eslint-disable-next-line max-len
export const parseStringMonthValue: StringValueParser<CronMonthValue> = source => {
	const valid = isStringMonthValue(source);
	const cronMonthValueNumber = (valid
		? stringParseDecimal(source)
		: NaN) as CronMonthValueNumber;

	return valid
		? isNaN(cronMonthValueNumber)
			? (source.toUpperCase() as CronMonthValueString)
			: cronMonthValueNumber
		: undefined;
};
