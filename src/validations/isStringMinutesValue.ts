import { isString, stringTest } from "@vangware/utils";

/**
 * Check if given is a string representing a `CronMinutesValue`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isStringMinutesValue = (value: unknown): value is string =>
	isString(value) && stringTest(/^(?:[0-9]|[1-4][0-9]|5[0-9])$/u)(value);
