import { isString } from "@vangware/utils";
import { CronMonthValueString } from "../types/CronMonthValueString";

/**
 * Check if given value is between JAN-DEC.
 * @param value Value to check.
 */
export const isCronMonthValueString = (
	value: unknown
): value is CronMonthValueString =>
	isString(value) &&
	/^(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)$/iu.test(value);
