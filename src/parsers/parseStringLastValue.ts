import { isUndefined, stringParseDecimal } from "@vangware/utils";
import type { CronLastValue } from "../types/CronLastValue.js";
import { isCronDayOfWeekValueNumber } from "../validations/isCronDayOfWeekValueNumber.js";
import { isStringLastValue } from "../validations/isStringLastValue.js";

/**
 * Parses a string into a `CronLastValue`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronLastValue` or `undefined` if invalid.
 */
export const parseStringLastValue = (
	source: string,
): CronLastValue | undefined => {
	const valid = isStringLastValue(source);
	const last = valid ? stringParseDecimal(source) : undefined;

	return valid && !isUndefined(last) && isCronDayOfWeekValueNumber(last)
		? { last }
		: undefined;
};
