import { isNumber, numberBetween } from "@vangware/utils";
import { CronDayOfWeekValueNumber } from "../types/CronDayOfWeekValueNumber";

/**
 * Check if given value is between 0-7.
 * @param value Value to check.
 */
export const isCronDayOfWeekValueNumber = (
	value: unknown
): value is CronDayOfWeekValueNumber =>
	isNumber(value) && numberBetween(0)(7)(value);
