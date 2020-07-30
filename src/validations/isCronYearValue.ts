import { isNumber, numberBetween } from "@vangware/utils";
import { CronYearValue } from "../types/CronYearValue";

/**
 * Check if given is `CronYearValue`.
 * @param value Value to check.
 */
export const isCronYearValue = (value: unknown): value is CronYearValue =>
	isNumber(value) && numberBetween(1970)(2099)(value);
