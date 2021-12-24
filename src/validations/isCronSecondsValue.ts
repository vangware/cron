import { isNumber, numberBetween } from "@vangware/utils";
import type { CronSecondsValue } from "../types/CronSecondsValue.js";

/**
 * Check if given is `CronSecondsValue`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronSecondsValue = (value: unknown): value is CronSecondsValue =>
	isNumber(value) && numberBetween(0)(59)(value);
