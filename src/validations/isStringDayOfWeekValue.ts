import { isCronDayOfWeekValueString } from "./isCronDayOfWeekValueString";
import { isStringDayOfWeekValueNumber } from "./isStringDayOfWeekValueNumber";
import { validateOr } from "./validateOr";

/**
 * Check if given is a string representing a `CronDayOfWeekValue`.
 * @param value Value to check.
 */
export const isStringDayOfWeekValue = validateOr([
	isCronDayOfWeekValueString,
	isStringDayOfWeekValueNumber
]);
