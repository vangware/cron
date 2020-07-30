import { isNumber, numberBetween } from "@vangware/utils";
import { CronMonthValueNumber } from "../types/CronMonthValueNumber";

/**
 * Check if given value is between 1 and 12.
 * @param value Value to check.
 */
export const isCronMonthValueNumber = (
	value: unknown
): value is CronMonthValueNumber =>
	isNumber(value) && numberBetween(1)(12)(value);
