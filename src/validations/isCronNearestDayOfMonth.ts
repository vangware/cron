import { isNumber, isObject } from "@vangware/utils";
import type { CronNearestDayOfMonth } from "../types/CronNearestDayOfMonth";
import { isCronDayOfMonthValue } from "./isCronDayOfMonthValue";

/**
 * Check if given is `CronNearestDayOfMonth`.
 * @param value Value to check.
 */
export const isCronNearestDayOfMonth = (
	value: unknown
): value is CronNearestDayOfMonth =>
	isObject(value) &&
	isNumber((value as CronNearestDayOfMonth).nearest) &&
	isCronDayOfMonthValue((value as CronNearestDayOfMonth).nearest);
