import { isString, stringTest } from "@vangware/utils";

/**
 * Check if given is a string representing a `CronMonthValueNumber`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isStringMonthValueNumber = (value: unknown): value is string =>
	isString(value) && stringTest(/^(?:[1-9]|1[0-2])$/u)(value);
