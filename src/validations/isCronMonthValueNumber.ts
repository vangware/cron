import { isNumber, numberBetween } from "@vangware/utils";
import type { CronMonthValueNumber } from "../types/CronMonthValueNumber.js";

/**
 * Check if given is `CronMonthValueNumber`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronMonthValueNumber = (
	value: unknown,
): value is CronMonthValueNumber =>
	isNumber(value) && numberBetween(1)(12)(value);
