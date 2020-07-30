import { isNumber, numberBetween } from "@vangware/utils";
import { CronYearValue } from "../types/CronYearValue";

/**
 * Check if given value is between 1970 and 2099.
 * @param value Value to check.
 */
export const isCronYearValue = (value: unknown): value is CronYearValue =>
	isNumber(value) && numberBetween(1970)(2099)(value);
