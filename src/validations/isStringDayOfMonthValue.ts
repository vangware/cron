import { isString, stringTest } from "@vangware/utils";

/**
 * Check if given is a string representing a `CronDayOfMonthValue`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isStringDayOfMonthValue = (value: unknown): value is string =>
	isString(value) && stringTest(/^(?:[1-9]|[12][0-9]|3[01])$/u)(value);
