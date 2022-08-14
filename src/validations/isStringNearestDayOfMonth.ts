import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronNearestDayOfMonth`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isStringNearestDayOfMonth = (value: unknown): value is string =>
	isString(value) && match(/^(?:[1-9]|[12][0-9]|3[01])W$/iu)(value);
