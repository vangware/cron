import { validateOr } from "../utils/validateOr.js";
import { isCronMonthValueString } from "./isCronMonthValueString.js";
import { isStringMonthValueNumber } from "./isStringMonthValueNumber.js";

/**
 * Check if given is a string representing a `CronMonthValue`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isStringMonthValue = validateOr([
	isCronMonthValueString,
	isStringMonthValueNumber,
]);
