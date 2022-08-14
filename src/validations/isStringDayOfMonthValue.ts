import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronDayOfMonthValue`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isStringDayOfMonthValue("13"); // true
 * isStringDayOfMonthValue("50"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is a string representing a `CronDayOfMonthValue`, `false` otherwise.
 */
export const isStringDayOfMonthValue = (value: unknown): value is string =>
	isString(value) && match(/^(?:[1-9]|[12][0-9]|3[01])$/u)(value);
