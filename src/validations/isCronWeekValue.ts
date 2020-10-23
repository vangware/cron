import { isNumber, numberBetween } from "@vangware/utils";
import type { CronWeekValue } from "../types/CronWeekValue";

/**
 * Check if given is `CronWeekValue`.
 * @param value Value to check.
 */
export const isCronWeekValue = (value: unknown): value is CronWeekValue =>
	isNumber(value) && numberBetween(1)(5)(value);
