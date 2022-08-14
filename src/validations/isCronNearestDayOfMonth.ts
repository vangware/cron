import { isNumber, isObject } from "@vangware/predicates";
import type { CronNearestDayOfMonth } from "../types/CronNearestDayOfMonth.js";
import { isCronDayOfMonthValue } from "./isCronDayOfMonthValue.js";

/**
 * Check if given is `CronNearestDayOfMonth`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronNearestDayOfMonth({ nearest: 10 }); // true
 * isCronNearestDayOfMonth({ nearest: 100 }); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronNearestDayOfMonth`, `false` otherwise.
 */
export const isCronNearestDayOfMonth = (
	value: unknown,
): value is CronNearestDayOfMonth =>
	isObject(value) &&
	isNumber((value as CronNearestDayOfMonth).nearest) &&
	isCronDayOfMonthValue((value as CronNearestDayOfMonth).nearest);
