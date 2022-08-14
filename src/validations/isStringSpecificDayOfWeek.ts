import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronSpecificDayOfWeek`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isStringSpecificDayOfWeek = (value: unknown): value is string =>
	isString(value) && match(/^[1-7]#[1-5]$/u)(value);
