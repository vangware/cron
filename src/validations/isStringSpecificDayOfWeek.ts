import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronSpecificDayOfWeek`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isStringSpecificDayOfWeek("1#5"); // true
 * isStringSpecificDayOfWeek("9#9"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is a string representing a `CronSpecificDayOfWeek`, `false` otherwise.
 */
export const isStringSpecificDayOfWeek = (value: unknown): value is string =>
	isString(value) && match(/^[1-7]#[1-5]$/u)(value);
