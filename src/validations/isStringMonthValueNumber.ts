import { isString } from "@vangware/utils";

/**
 * Check if given is a string representing a `CronMonthValueNumber`.
 * @param value Value to check.
 */
export const isStringMonthValueNumber = (value: unknown): value is string =>
	isString(value) && /^(?:[1-9]|1[0-2])$/u.test(value);
