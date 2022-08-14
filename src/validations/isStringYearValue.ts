import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronYearValue`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isStringYearValue = (value: unknown): value is string =>
	isString(value) &&
	match(/^(?:19[78][0-9]|199[0-9]|20[0-8][0-9]|209[0-9])$/u)(value);
