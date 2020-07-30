import { isNumber, numberBetween } from "@vangware/utils";
import { CronSecondsValue } from "../types/CronSecondsValue";

/**
 * Check if given value is between 0 and 59.
 * @param value Value to check.
 */
export const isCronSecondsValue = (value: unknown): value is CronSecondsValue =>
	isNumber(value) && numberBetween(0)(59)(value);
