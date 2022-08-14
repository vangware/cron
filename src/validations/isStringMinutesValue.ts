import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronMinutesValue`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isStringMinutesValue = (value: unknown): value is string =>
	isString(value) && match(/^(?:[0-9]|[1-4][0-9]|5[0-9])$/u)(value);
