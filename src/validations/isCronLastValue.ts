import { isNumber, isObject } from "@vangware/utils";
import type { CronLastValue } from "../types/CronLastValue";
import { isCronDayOfWeekValueNumber } from "./isCronDayOfWeekValueNumber";

/**
 * Check if given is `CronLastValue`.
 * @param value Value to check.
 */
export const isCronLastValue = (value: unknown): value is CronLastValue =>
	isObject(value) &&
	isNumber((value as CronLastValue).last) &&
	isCronDayOfWeekValueNumber((value as CronLastValue).last);
