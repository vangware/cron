import { isString } from "@vangware/utils";

/**
 * Check if given is a string representing a `CronSecondsValue`.
 * @param value Value to check.
 */
export const isStringSecondsValue = (value: unknown): value is string =>
	isString(value) && /^(?:[0-9]|[1-4][0-9]|5[0-9])$/u.test(value);
