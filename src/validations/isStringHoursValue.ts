import { isString, stringTest } from "@vangware/utils";

/**
 * Check if given is a string representing a `CronHoursValue`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isStringHoursValue = (value: unknown): value is string =>
	isString(value) && stringTest(/^(?:[0-9]|1[0-9]|2[0-3])$/u)(value);
