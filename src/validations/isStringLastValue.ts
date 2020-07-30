import { isString } from "@vangware/utils";

/**
 * Check if given is a string representing a `CronLastValue`.
 * @param value Value to check.
 */
export const isStringLastValue = (value: unknown): value is string =>
	isString(value) && /^[0-7]L$/iu.test(value);
