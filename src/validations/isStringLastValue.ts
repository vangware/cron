import { isString, match } from "@vangware/predicates";

/**
 * Check if given is a string representing a `CronLastValue`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isStringLastValue("7L"); // true
 * isStringLastValue("7l"); // true
 * isStringLastValue("100L"); // false
 * isStringLastValue("INVALID"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is a string representing a `CronLastValue`, `false` otherwise.
 */
export const isStringLastValue = (value: unknown): value is string =>
	isString(value) && match(/^[0-7]L$/iu)(value);
