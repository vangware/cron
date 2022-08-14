import { isString, match } from "@vangware/predicates";
import type { CronMonthValueString } from "../types/CronMonthValueString.js";

/**
 * Check if given is `CronMonthValueString`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isCronMonthValueString = (
	value: unknown,
): value is CronMonthValueString =>
	isString(value) &&
	match(/^(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)$/iu)(value);
