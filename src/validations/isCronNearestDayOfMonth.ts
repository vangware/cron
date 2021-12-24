import { isNumber, isObject } from "@vangware/utils";
import type { CronNearestDayOfMonth } from "../types/CronNearestDayOfMonth.js";
import { isCronDayOfMonthValue } from "./isCronDayOfMonthValue.js";

/**
 * Check if given is `CronNearestDayOfMonth`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronNearestDayOfMonth = (
	value: unknown,
): value is CronNearestDayOfMonth =>
	isObject(value) &&
	isNumber((value as CronNearestDayOfMonth).nearest) &&
	isCronDayOfMonthValue((value as CronNearestDayOfMonth).nearest);
