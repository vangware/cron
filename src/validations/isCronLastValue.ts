import { isNumber, isObject } from "@vangware/predicates";
import type { CronLastValue } from "../types/CronLastValue.js";
import { isCronDayOfWeekValueNumber } from "./isCronDayOfWeekValueNumber.js";

/**
 * Check if given is `CronLastValue`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronLastValue({ last: 7 }); // true
 * isCronLastValue({ last: 100 }); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronLastValue`, `false` otherwise.
 */
export const isCronLastValue = (value: unknown): value is CronLastValue =>
	isObject(value) &&
	isNumber((value as CronLastValue).last) &&
	isCronDayOfWeekValueNumber((value as CronLastValue).last);
