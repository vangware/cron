import { isString } from "@vangware/utils";

/**
 * Check if given value is "{value}L".
 * @param value Value to check.
 */
export const isStringLastValue = (value: unknown): value is string =>
	isString(value) && /^[0-7]L$/iu.test(value);
