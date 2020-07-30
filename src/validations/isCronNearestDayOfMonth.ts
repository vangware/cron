import { isNumber } from "@vangware/utils";
import { CronNearestDayOfMonth } from "../types/CronNearestDayOfMonth";
import { isCronDayOfMonthValue } from "./isCronDayOfMonthValue";

/**
 * Check if given value is CronNearestDayOfMonth.
 * @param value Value to check.
 */
export const isCronNearestDayOfMonth = (
	value: unknown
): value is CronNearestDayOfMonth =>
	isNumber((value as CronNearestDayOfMonth)?.nearest) &&
	isCronDayOfMonthValue((value as CronNearestDayOfMonth)?.nearest);
