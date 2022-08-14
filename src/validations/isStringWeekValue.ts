import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronWeekValue`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isStringWeekValue = (value: unknown): value is string =>
	isString(value) && match(/^[1-5]$/u)(value);
