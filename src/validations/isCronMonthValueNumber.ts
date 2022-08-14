import { between, isNumber } from "@vangware/predicates";
import type { CronMonthValueNumber } from "../types/CronMonthValueNumber.js";

/**
 * Check if given is `CronMonthValueNumber`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronMonthValueNumber(10); // true
 * isCronMonthValueNumber(50); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronMonthValueNumber`, `false` otherwise.
 */
export const isCronMonthValueNumber = (
	value: unknown,
): value is CronMonthValueNumber => isNumber(value) && between(1)(12)(value);
