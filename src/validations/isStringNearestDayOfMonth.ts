import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronNearestDayOfMonth`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isStringNearestDayOfMonth("10W"); // true
 * isStringNearestDayOfMonth("10w"); // true
 * isStringNearestDayOfMonth("100w"); // false
 * isStringNearestDayOfMonth("INVALID"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is a string representing a `CronNearestDayOfMonth`, `false` otherwise.
 */
export const isStringNearestDayOfMonth = (value: unknown): value is string =>
	isString(value) && match(/^(?:[1-9]|[12][0-9]|3[01])W$/iu)(value);
