import { isString } from "@vangware/utils";

/**
 * Check if given value is "{day}#{week}".
 * @param value Value to check.
 */
export const isStringSpecificDayOfWeek = (value: unknown): value is string =>
	isString(value) && /^[1-7]#[1-5]$/u.test(value);
