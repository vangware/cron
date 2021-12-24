import { isString, stringTest } from "@vangware/utils";

/**
 * Check if given is a string representing a `CronWeekValue`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isStringWeekValue = (value: unknown): value is string =>
	isString(value) && stringTest(/^[1-5]$/u)(value);
