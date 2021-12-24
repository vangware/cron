import { isString, stringTest } from "@vangware/utils";

/**
 * Check if given is a string representing a `CronLastValue`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isStringLastValue = (value: unknown): value is string =>
	isString(value) && stringTest(/^[0-7]L$/iu)(value);
