import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronYearValue`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isStringYearValue("1989"); // true
 * isStringYearValue("3000"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is a string representing a `CronYearValue`, `false` otherwise.
 */
export const isStringYearValue = (value: unknown): value is string =>
	isString(value) &&
	match(/^(?:19[78][0-9]|199[0-9]|20[0-8][0-9]|209[0-9])$/u)(value);
