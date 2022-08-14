import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronLastValue`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isStringLastValue = (value: unknown): value is string =>
	isString(value) && match(/^[0-7]L$/iu)(value);
