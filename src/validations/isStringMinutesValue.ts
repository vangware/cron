import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronMinutesValue`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isStringMinutesValue("30"); // true
 * isStringMinutesValue("80"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is a string representing a `CronMinutesValue`, `false` otherwise.
 */
export const isStringMinutesValue = (value: unknown): value is string =>
	isString(value) && match(/^(?:[0-9]|[1-4][0-9]|5[0-9])$/u)(value);
