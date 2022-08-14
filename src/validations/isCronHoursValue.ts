import { between, isNumber } from "@vangware/predicates";
import type { CronHoursValue } from "../types/CronHoursValue.js";

/**
 * Check if given is `CronHoursValue`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronHoursValue(12); // true
 * isCronHoursValue(50); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronHoursValue`, `false` otherwise.
 */
export const isCronHoursValue = (value: unknown): value is CronHoursValue =>
	isNumber(value) && between(0)(23)(value);
