import { isNumber, numberBetween } from "@vangware/utils";
import { CronDayOfMonthValue } from "../types/CronDayOfMonthValue";

/**
 * Check if given value is between 1-31.
 * @param value Value to check.
 */
export const isCronDayOfMonthValue = (
	value: unknown
): value is CronDayOfMonthValue =>
	isNumber(value) && numberBetween(1)(31)(value);
