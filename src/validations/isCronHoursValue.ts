import { isNumber, numberBetween } from "@vangware/utils";
import { CronHoursValue } from "../types/CronHoursValue";

/**
 * Check if given value is between 0-23.
 * @param value Value to check.
 */
export const isCronHoursValue = (value: unknown): value is CronHoursValue =>
	isNumber(value) && numberBetween(0)(23)(value);
