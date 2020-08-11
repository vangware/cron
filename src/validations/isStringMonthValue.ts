import { validateOr } from "../utils/validateOr";
import { isCronMonthValueString } from "./isCronMonthValueString";
import { isStringMonthValueNumber } from "./isStringMonthValueNumber";

/**
 * Check if given is a string representing a `CronMonthValue`.
 * @param value Value to check.
 */
export const isStringMonthValue = validateOr([
	isCronMonthValueString,
	isStringMonthValueNumber
]);
