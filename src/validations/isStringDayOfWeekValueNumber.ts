import { isString, stringTest } from "@vangware/utils";

/**
 * Check if given is a string representing a `CronDayOfWeekValueNumber`.
 * @param value Value to check.
 */
export const isStringDayOfWeekValueNumber = (value: unknown): value is string =>
	isString(value) && stringTest(/^[0-7]$/u)(value);
