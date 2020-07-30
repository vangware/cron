import { isNumber, numberBetween } from "@vangware/utils";
import { CronMinutesValue } from "../types/CronMinutesValue";

/**
 * Check if given value is between 0 and 59.
 * @param value Value to check.
 */
export const isCronMinutesValue = (value: unknown): value is CronMinutesValue =>
	isNumber(value) && numberBetween(0)(59)(value);
