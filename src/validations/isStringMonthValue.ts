import { isCronMonthValueString } from "./isCronMonthValueString";
import { isStringMonthValueNumber } from "./isStringMonthValueNumber";
import { validateOr } from "./validateOr";

/**
 * Check if given value is between 1-12 or JAN-DEC.
 * @param value Value to check.
 */
export const isStringMonthValue = validateOr([
	isCronMonthValueString,
	isStringMonthValueNumber
]);
