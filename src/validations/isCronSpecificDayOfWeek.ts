import { isNumber, isObject } from "@vangware/predicates";
import type { CronSpecificDayOfWeek } from "../types/CronSpecificDayOfWeek.js";
import { isCronDayOfWeekValueNumber } from "./isCronDayOfWeekValueNumber.js";
import { isCronWeekValue } from "./isCronWeekValue.js";

/**
 * Check if given is `CronSpecificDayOfWeek`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronSpecificDayOfWeek({ day: 1, week: 5 }); // true
 * isCronSpecificDayOfWeek({ day: 9, week: 9 }); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronSpecificDayOfWeek`, `false` otherwise.
 */
export const isCronSpecificDayOfWeek = (
	value: unknown,
): value is CronSpecificDayOfWeek =>
	isObject(value) &&
	isNumber((value as CronSpecificDayOfWeek).day) &&
	isCronDayOfWeekValueNumber((value as CronSpecificDayOfWeek).day) &&
	isNumber((value as CronSpecificDayOfWeek).week) &&
	isCronWeekValue((value as CronSpecificDayOfWeek).week);
