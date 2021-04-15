import { stringParseDecimal } from "@vangware/utils";
import type { CronDayOfWeekValue } from "../types/CronDayOfWeekValue";
import type { CronDayOfWeekValueNumber } from "../types/CronDayOfWeekValueNumber";
import type { CronDayOfWeekValueString } from "../types/CronDayOfWeekValueString";
import type { StringValueParser } from "../types/StringValueParser";
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
			? (source.toLocaleUpperCase() as CronDayOfWeekValueString)
			: cronDayOfWeekValueNumber
		: undefined;
};
