import { isString } from "@vangware/utils";

/**
 * Check if given is a string representing a `CronHoursValue`.
 * @param value Value to check.
 */
export const isStringHoursValue = (value: unknown): value is string =>
	isString(value) && /^(?:[0-9]|1[0-9]|2[0-3])$/u.test(value);
