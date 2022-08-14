import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronSecondsValue`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isStringSecondsValue("30"); // true
 * isStringSecondsValue("80"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is a string representing a `CronSecondsValue`, `false` otherwise.
 */
export const isStringSecondsValue = (value: unknown): value is string =>
	isString(value) && match(/^(?:[0-9]|[1-4][0-9]|5[0-9])$/u)(value);
