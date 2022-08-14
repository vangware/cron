import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronHoursValue`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isStringHoursValue("12"); // true
 * isStringHoursValue("50"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is a string representing a `CronHoursValue`, `false` otherwise.
 */
export const isStringHoursValue = (value: unknown): value is string =>
	isString(value) && match(/^(?:[0-9]|1[0-9]|2[0-3])$/u)(value);
