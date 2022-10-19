import { validateOr } from "../utils/validateOr.js";
import { isCronDayOfWeekValueString } from "./isCronDayOfWeekValueString.js";
import { isStringDayOfWeekValueNumber } from "./isStringDayOfWeekValueNumber.js";

/**
 * Check if given is a string representing a `CronDayOfWeekValue`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isStringDayOfWeekValue("5"); // true
 * isStringDayOfWeekValue("FRI"); // true
 * isStringDayOfWeekValue("fri"); // true
 * isStringDayOfWeekValue("FRIDAY"); // false
 * isStringDayOfWeekValue("10"); // false
 * isStringDayOfWeekValue("INVALID"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is a string representing a `CronDayOfWeekValue`, `false` otherwise.
 */
export const isStringDayOfWeekValue = validateOr(
	isCronDayOfWeekValueString,
	isStringDayOfWeekValueNumber,
);
