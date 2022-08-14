import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronMonthValueNumber`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isStringMonthValueNumber = (value: unknown): value is string =>
	isString(value) && match(/^(?:[1-9]|1[0-2])$/u)(value);
