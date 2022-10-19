import { validateOr } from "../utils/validateOr.js";
import { isCronMonthValueString } from "./isCronMonthValueString.js";
import { isStringMonthValueNumber } from "./isStringMonthValueNumber.js";

/**
 * Check if given is a string representing a `CronMonthValue`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isStringMonthValue("10"); // true
 * isStringMonthValue("OCT"); // true
 * isStringMonthValue("oct"); // true
 * isStringMonthValue("OCTOBER"); // false
 * isStringMonthValue("50"); // false
 * isStringMonthValue("INVALID"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is a string representing a `CronMonthValue`, `false` otherwise.
 */
export const isStringMonthValue = validateOr(
	isCronMonthValueString,
	isStringMonthValueNumber,
);
