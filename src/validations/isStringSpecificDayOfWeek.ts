import { isString, stringTest } from "@vangware/utils";

/**
 * Check if given is a string representing a `CronSpecificDayOfWeek`.
 * @param value Value to check.
 */
export const isStringSpecificDayOfWeek = (value: unknown): value is string =>
	isString(value) && stringTest(/^[1-7]#[1-5]$/u)(value);
