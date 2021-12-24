import { isNumber, isObject } from "@vangware/utils";
import type { CronSpecificDayOfWeek } from "../types/CronSpecificDayOfWeek.js";
import { isCronDayOfWeekValueNumber } from "./isCronDayOfWeekValueNumber.js";
import { isCronWeekValue } from "./isCronWeekValue.js";

/**
 * Check if given is `CronSpecificDayOfWeek`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronSpecificDayOfWeek = (
	value: unknown,
): value is CronSpecificDayOfWeek =>
	isObject(value) &&
	isNumber((value as CronSpecificDayOfWeek).day) &&
	isCronDayOfWeekValueNumber((value as CronSpecificDayOfWeek).day) &&
	isNumber((value as CronSpecificDayOfWeek).week) &&
	isCronWeekValue((value as CronSpecificDayOfWeek).week);
