import { isNumber, numberBetween } from "@vangware/utils";
import type { CronDayOfMonthValue } from "../types/CronDayOfMonthValue.js";

/**
 * Check if given is `CronDayOfMonthValue`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronDayOfMonthValue = (
	value: unknown,
): value is CronDayOfMonthValue =>
	isNumber(value) && numberBetween(1)(31)(value);
