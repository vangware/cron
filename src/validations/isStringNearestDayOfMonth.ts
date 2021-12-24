import { isString, stringTest } from "@vangware/utils";

/**
 * Check if given is a string representing a `CronNearestDayOfMonth`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isStringNearestDayOfMonth = (value: unknown): value is string =>
	isString(value) && stringTest(/^(?:[1-9]|[12][0-9]|3[01])W$/iu)(value);
