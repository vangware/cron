import { isString } from "@vangware/utils";

/**
 * Check if given value is between 1970 and 2099.
 * @param value Value to check.
 */
export const isStringYearValue = (value: unknown): value is string =>
	isString(value) &&
	/^(?:19[78][0-9]|199[0-9]|20[0-8][0-9]|209[0-9])$/u.test(value);
