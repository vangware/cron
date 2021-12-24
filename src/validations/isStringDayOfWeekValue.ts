import { validateOr } from "../utils/validateOr.js";
import { isCronDayOfWeekValueString } from "./isCronDayOfWeekValueString.js";
import { isStringDayOfWeekValueNumber } from "./isStringDayOfWeekValueNumber.js";

/**
 * Check if given is a string representing a `CronDayOfWeekValue`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isStringDayOfWeekValue = validateOr([
	isCronDayOfWeekValueString,
	isStringDayOfWeekValueNumber,
]);
