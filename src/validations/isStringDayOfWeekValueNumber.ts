import { isString } from "@vangware/utils";

/**
 * Check if given value is between 0-7.
 * @param value Value to check.
 */
export const isStringDayOfWeekValueNumber = (value: unknown): value is string =>
	isString(value) && /^[0-7]$/u.test(value);
