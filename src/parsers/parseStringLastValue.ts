import { parseDecimal } from "@vangware/parsers";
import { isUndefined } from "@vangware/predicates";
import type { Maybe } from "@vangware/types";
import type { CronLastValue } from "../types/CronLastValue.js";
import { isCronDayOfWeekValueNumber } from "../validations/isCronDayOfWeekValueNumber.js";
import { isStringLastValue } from "../validations/isStringLastValue.js";

/**
 * Parses a string into a `CronLastValue`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringLastValue("5L"); // { last: 5 }
 * parseStringLastValue("INVALID"); // undefined
 * ```
 * @param source string to be parsed.
 * @returns A `CronLastValue` or `undefined` if invalid.
 */
export const parseStringLastValue = (source: string): Maybe<CronLastValue> => {
	const valid = isStringLastValue(source);
	const last = valid ? parseDecimal(source) : undefined;

	return valid && !isUndefined(last) && isCronDayOfWeekValueNumber(last)
		? { last }
		: undefined;
};
