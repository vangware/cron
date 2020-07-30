import { isNumber } from "@vangware/utils";
import { CronLastValue } from "../types/CronLastValue";
import { isCronDayOfWeekValueNumber } from "./isCronDayOfWeekValueNumber";

/**
 * Check if given value is CronLastValue.
 * @param value Value to check.
 */
export const isCronLastValue = (value: unknown): value is CronLastValue =>
	isNumber((value as CronLastValue)?.last) &&
	isCronDayOfWeekValueNumber((value as CronLastValue)?.last);
