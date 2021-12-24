import { isString, stringTest } from "@vangware/utils";

/**
 * Check if given is a string representing a `CronYearValue`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isStringYearValue = (value: unknown): value is string =>
	isString(value) &&
	stringTest(/^(?:19[78][0-9]|199[0-9]|20[0-8][0-9]|209[0-9])$/u)(value);
