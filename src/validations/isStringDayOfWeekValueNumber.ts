import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronDayOfWeekValueNumber`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isStringDayOfWeekValueNumber = (value: unknown): value is string =>
	isString(value) && match(/^[0-7]$/u)(value);
