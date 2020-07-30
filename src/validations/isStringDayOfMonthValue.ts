import { isString } from "@vangware/utils";

/**
 * Check if given value is between 1-31.
 * @param value Value to check.
 */
export const isStringDayOfMonthValue = (value: unknown): value is string =>
	isString(value) && /^(?:[1-9]|[12][0-9]|3[01])$/u.test(value);
