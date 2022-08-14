import { between, isNumber } from "@vangware/predicates";
import type { CronWeekValue } from "../types/CronWeekValue.js";

/**
 * Check if given is `CronWeekValue`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronWeekValue(2); // true
 * isCronWeekValue(8); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronWeekValue`, `false` otherwise.
 */
export const isCronWeekValue = (value: unknown): value is CronWeekValue =>
	isNumber(value) && between(1)(5)(value);
