import { validateOr } from "../utils/validateOr";
import { isCronDayOfWeekValueString } from "./isCronDayOfWeekValueString";
import { isStringDayOfWeekValueNumber } from "./isStringDayOfWeekValueNumber";

/**
 * Check if given is a string representing a `CronDayOfWeekValue`.
 * @param value Value to check.
 */
export const isStringDayOfWeekValue = validateOr([
	isCronDayOfWeekValueString,
	isStringDayOfWeekValueNumber
]);
