import { between, isNumber } from "@vangware/predicates";
import type { CronMinutesValue } from "../types/CronMinutesValue.js";

/**
 * Check if given is `CronMinutesValue`.
 *
 * @example
 * ```typescript
 * isCronMinutesValue(30); // true
 * isCronMinutesValue(80); // false
 * ```
 * @category Predicates
 * @param value Value to check.
 * @returns Returns `true` if is `CronMinutesValue`, `false` otherwise.
 */
export const isCronMinutesValue = (value: unknown): value is CronMinutesValue =>
	isNumber(value) && between(0)(59)(value);
