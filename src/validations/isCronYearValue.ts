import { between, isNumber } from "@vangware/predicates";
import type { CronYearValue } from "../types/CronYearValue.js";

/**
 * Check if given is `CronYearValue`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronYearValue(1989); // true
 * isCronYearValue(3000); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronYearValue`, `false` otherwise.
 */
export const isCronYearValue = (value: unknown): value is CronYearValue =>
	isNumber(value) && between(1970)(2099)(value);
