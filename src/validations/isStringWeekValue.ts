import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronWeekValue`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isStringWeekValue("2"); // true
 * isStringWeekValue("8"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is a string representing a `CronWeekValue`, `false` otherwise.
 */
export const isStringWeekValue = (value: unknown): value is string =>
	isString(value) && match(/^[1-5]$/u)(value);
