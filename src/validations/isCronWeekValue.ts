import { isNumber, numberBetween } from "@vangware/utils";
import { CronWeekValue } from "../types/CronWeekValue";

/**
 * Check if given value is between 1-5.
 * @param value Value to check.
 */
export const isCronWeekValue = (value: unknown): value is CronWeekValue =>
	isNumber(value) && numberBetween(1)(5)(value);
