import { isNumber, isString } from "@vangware/utils";
import type { CronDayOfWeekValue } from "../types/CronDayOfWeekValue";
import { isCronDayOfWeekValueNumber } from "./isCronDayOfWeekValueNumber";
import { isCronDayOfWeekValueString } from "./isCronDayOfWeekValueString";

/**
 * Check if given is `CronDayOfWeekValue`.
 * @param value Value to check.
 */
export const isCronDayOfWeekValue = (
	value: unknown
): value is CronDayOfWeekValue =>
	(isString(value) && isCronDayOfWeekValueString(value)) ||
	(isNumber(value) && isCronDayOfWeekValueNumber(value));
