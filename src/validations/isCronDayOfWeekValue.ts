import { isNumber, isString } from "@vangware/predicates";
import type { CronDayOfWeekValue } from "../types/CronDayOfWeekValue.js";
import { isCronDayOfWeekValueNumber } from "./isCronDayOfWeekValueNumber.js";
import { isCronDayOfWeekValueString } from "./isCronDayOfWeekValueString.js";

/**
 * Check if given is `CronDayOfWeekValue`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronDayOfWeekValue(5); // true
 * isCronDayOfWeekValue("FRI"); // true
 * isCronDayOfWeekValue("fri"); // true
 * isCronDayOfWeekValue("FRIDAY"); // false
 * isCronDayOfWeekValue(10); // false
 * isCronDayOfWeekValue("INVALID"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronDayOfWeekValue`, `false` otherwise.
 */
export const isCronDayOfWeekValue = (
	value: unknown,
): value is CronDayOfWeekValue =>
	(isString(value) && isCronDayOfWeekValueString(value)) ||
	(isNumber(value) && isCronDayOfWeekValueNumber(value));
