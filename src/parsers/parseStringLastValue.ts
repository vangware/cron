import { parseDecimal } from "@vangware/parsers";
import { isUndefined } from "@vangware/predicates";
import type { CronLastValue } from "../types/CronLastValue.js";
import { isCronDayOfWeekValueNumber } from "../validations/isCronDayOfWeekValueNumber.js";
import { isStringLastValue } from "../validations/isStringLastValue.js";

/**
 * Parses a string into a `CronLastValue`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronLastValue` or `undefined` if invalid.
 * @example
 */
export const parseStringLastValue = (
	source: string,
): CronLastValue | undefined => {
	const valid = isStringLastValue(source);
	const last = valid ? parseDecimal(source) : undefined;

	return valid && !isUndefined(last) && isCronDayOfWeekValueNumber(last)
		? { last }
		: undefined;
};
