import { isNumber, isObject } from "@vangware/utils";
import type { CronSpecificDayOfWeek } from "../types/CronSpecificDayOfWeek";
import { isCronDayOfWeekValueNumber } from "./isCronDayOfWeekValueNumber";
import { isCronWeekValue } from "./isCronWeekValue";

/**
 * Check if given is `CronSpecificDayOfWeek`.
 * @param value Value to check.
 */
export const isCronSpecificDayOfWeek = (
	value: unknown
): value is CronSpecificDayOfWeek =>
	isObject(value) &&
	isNumber((value as CronSpecificDayOfWeek).day) &&
	isCronDayOfWeekValueNumber((value as CronSpecificDayOfWeek).day) &&
	isNumber((value as CronSpecificDayOfWeek).week) &&
	isCronWeekValue((value as CronSpecificDayOfWeek).week);
