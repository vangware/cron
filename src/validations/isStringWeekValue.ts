import { isString } from "@vangware/utils";

/**
 * Check if given value is between 1-5.
 * @param value Value to check.
 */
export const isStringWeekValue = (value: unknown): value is string =>
	isString(value) && /^[1-5]$/u.test(value);
