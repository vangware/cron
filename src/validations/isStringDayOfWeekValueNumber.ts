import { isString } from "@vangware/utils";

/**
 * Check if given is a string representing a `CronDayOfWeekValueNumber`.
 * @param value Value to check.
 */
export const isStringDayOfWeekValueNumber = (value: unknown): value is string =>
	isString(value) && /^[0-7]$/u.test(value);
