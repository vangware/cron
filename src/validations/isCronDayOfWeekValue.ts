import { isNumber, isString } from "@vangware/utils";
import type { CronDayOfWeekValue } from "../types/CronDayOfWeekValue.js";
import { isCronDayOfWeekValueNumber } from "./isCronDayOfWeekValueNumber.js";
import { isCronDayOfWeekValueString } from "./isCronDayOfWeekValueString.js";

/**
 * Check if given is `CronDayOfWeekValue`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronDayOfWeekValue = (
	value: unknown,
): value is CronDayOfWeekValue =>
	(isString(value) && isCronDayOfWeekValueString(value)) ||
	(isNumber(value) && isCronDayOfWeekValueNumber(value));
