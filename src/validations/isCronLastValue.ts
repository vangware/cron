import { isNumber, isObject } from "@vangware/utils";
import type { CronLastValue } from "../types/CronLastValue.js";
import { isCronDayOfWeekValueNumber } from "./isCronDayOfWeekValueNumber.js";

/**
 * Check if given is `CronLastValue`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronLastValue = (value: unknown): value is CronLastValue =>
	isObject(value) &&
	isNumber((value as CronLastValue).last) &&
	isCronDayOfWeekValueNumber((value as CronLastValue).last);
