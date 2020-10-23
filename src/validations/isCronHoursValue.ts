import { isNumber, numberBetween } from "@vangware/utils";
import type { CronHoursValue } from "../types/CronHoursValue";

/**
 * Check if given is `CronHoursValue`.
 * @param value Value to check.
 */
export const isCronHoursValue = (value: unknown): value is CronHoursValue =>
	isNumber(value) && numberBetween(0)(23)(value);
