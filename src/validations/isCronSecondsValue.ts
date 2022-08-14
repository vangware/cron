import { between, isNumber } from "@vangware/predicates";
import type { CronSecondsValue } from "../types/CronSecondsValue.js";

/**
 * Check if given is `CronSecondsValue`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isCronSecondsValue = (value: unknown): value is CronSecondsValue =>
	isNumber(value) && between(0)(59)(value);
