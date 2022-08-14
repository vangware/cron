import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronMonthValueNumber`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isStringMonthValueNumber("10"); // true
 * isStringMonthValueNumber("50"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is a string representing a `CronMonthValueNumber`, `false` otherwise.
 */
export const isStringMonthValueNumber = (value: unknown): value is string =>
	isString(value) && match(/^(?:[1-9]|1[0-2])$/u)(value);
