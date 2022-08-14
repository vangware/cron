import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronDayOfWeekValueNumber`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isStringDayOfWeekValueNumber("5"); // true
 * isStringDayOfWeekValueNumber("10"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is a string representing a `CronDayOfWeekValueNumber`, `false` otherwise.
 */
export const isStringDayOfWeekValueNumber = (value: unknown): value is string =>
	isString(value) && match(/^[0-7]$/u)(value);
