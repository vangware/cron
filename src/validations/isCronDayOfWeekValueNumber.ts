import { between, isNumber } from "@vangware/predicates";
import type { CronDayOfWeekValueNumber } from "../types/CronDayOfWeekValueNumber.js";

/**
 * Check if given is `CronDayOfWeekValueNumber`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronDayOfWeekValueNumber(5); // true
 * isCronDayOfWeekValueNumber(10); // false
 * isCronDayOfWeekValueNumber("INVALID"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronDayOfWeekValueNumber`, `false` otherwise.
 */
export const isCronDayOfWeekValueNumber = (
	value: unknown,
): value is CronDayOfWeekValueNumber => isNumber(value) && between(0)(7)(value);
