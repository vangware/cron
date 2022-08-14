import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronDayOfMonthValue`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isStringDayOfMonthValue = (value: unknown): value is string =>
	isString(value) && match(/^(?:[1-9]|[12][0-9]|3[01])$/u)(value);
