import { isCronDayOfWeekValueString } from "./isCronDayOfWeekValueString";
import { isStringDayOfWeekValueNumber } from "./isStringDayOfWeekValueNumber";
import { validateOr } from "./validateOr";

/**
 * Check if given value is between 0-7 or SUN-SAT.
 * @param value Value to check.
 */
export const isStringDayOfWeekValue = validateOr([
	isCronDayOfWeekValueString,
	isStringDayOfWeekValueNumber
]);
