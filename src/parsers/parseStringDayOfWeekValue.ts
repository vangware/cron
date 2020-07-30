import { stringParseDecimal } from "@vangware/utils";
import { CronDayOfWeekValue } from "../types/CronDayOfWeekValue";
import { CronDayOfWeekValueNumber } from "../types/CronDayOfWeekValueNumber";
import { CronDayOfWeekValueString } from "../types/CronDayOfWeekValueString";
import { StringValueParser } from "../types/StringValueParser";
import { isStringDayOfWeekValue } from "../validations/isStringDayOfWeekValue";

/**
 * Parses a string into a `CronDayOfWeekValue`.
 * @param source string to be parsed.
 * @returns A `CronDayOfWeekValue` or `undefined` if invalid.
 */
// eslint-disable-next-line max-len
export const parseStringDayOfWeekValue: StringValueParser<CronDayOfWeekValue> = source => {
	const valid = isStringDayOfWeekValue(source);
	const cronDayOfWeekValueNumber = (valid
		? stringParseDecimal(source)
		: NaN) as CronDayOfWeekValueNumber;

	return valid
		? isNaN(cronDayOfWeekValueNumber)
			? (source.toUpperCase() as CronDayOfWeekValueString)
			: cronDayOfWeekValueNumber
		: undefined;
};
