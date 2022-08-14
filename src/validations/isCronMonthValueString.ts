import { isString, match } from "@vangware/predicates";
import type { CronMonthValueString } from "../types/CronMonthValueString.js";

/**
 * Check if given is `CronMonthValueString`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronMonthValueString("OCT"); // true
 * isCronMonthValueString("oct"); // true
 * isCronMonthValueString("INVALID"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronMonthValueString`, `false` otherwise.
 */
export const isCronMonthValueString = (
	value: unknown,
): value is CronMonthValueString =>
	isString(value) &&
	match(/^(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)$/iu)(value);
