import { isNumber, isString } from "@vangware/utils";
import { CronDayOfWeekValue } from "../types/CronDayOfWeekValue";
import { isCronDayOfWeekValueNumber } from "./isCronDayOfWeekValueNumber";
import { isCronDayOfWeekValueString } from "./isCronDayOfWeekValueString";

/**
 * Check if given value is between 0-7 or SUN-SAT.
 * @param value Value to check.
 */
export const isCronDayOfWeekValue = (
	value: unknown
): value is CronDayOfWeekValue =>
	(isString(value) && isCronDayOfWeekValueString(value)) ||
	(isNumber(value) && isCronDayOfWeekValueNumber(value));
