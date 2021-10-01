import { isNumber, numberBetween } from "@vangware/utils";
import type { CronDayOfWeekValueNumber } from "../types/CronDayOfWeekValueNumber";

/**
 * Check if given is `CronDayOfWeekValueNumber`.
 * @param value Value to check.
 */
export const isCronDayOfWeekValueNumber = (
	value: unknown,
): value is CronDayOfWeekValueNumber =>
	isNumber(value) && numberBetween(0)(7)(value);
