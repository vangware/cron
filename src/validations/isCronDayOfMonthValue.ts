import { between, isNumber } from "@vangware/predicates";
import type { CronDayOfMonthValue } from "../types/CronDayOfMonthValue.js";

/**
 * Check if given is `CronDayOfMonthValue`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronDayOfMonthValue(13); // true
 * isCronDayOfMonthValue(50); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronDayOfMonthValue`, `false` otherwise.
 */
export const isCronDayOfMonthValue = (
	value: unknown,
): value is CronDayOfMonthValue => isNumber(value) && between(1)(31)(value);
