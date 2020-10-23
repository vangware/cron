import { stringParseDecimal } from "@vangware/utils";
import type { CronLastValue } from "../types/CronLastValue";
import { isCronDayOfWeekValueNumber } from "../validations/isCronDayOfWeekValueNumber";
import { isStringLastValue } from "../validations/isStringLastValue";

/**
 * Parses a string into a `CronLastValue`.
 * @param source string to be parsed.
 * @returns A `CronLastValue` or `undefined` if invalid.
 */
export const parseStringLastValue = (
	source: string
): CronLastValue | undefined => {
	const valid = isStringLastValue(source);
	const last = valid ? stringParseDecimal(source) : undefined;

	return valid && last && isCronDayOfWeekValueNumber(last)
		? { last }
		: undefined;
};
