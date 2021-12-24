import { isString, stringTest } from "@vangware/utils";
import type { CronMonthValueString } from "../types/CronMonthValueString.js";

/**
 * Check if given is `CronMonthValueString`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronMonthValueString = (
	value: unknown,
): value is CronMonthValueString =>
	isString(value) &&
	stringTest(/^(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)$/iu)(
		value,
	);
