import { isNumber, isString } from "@vangware/predicates";
import type { CronMonthValue } from "../types/CronMonthValue.js";
import { isCronMonthValueNumber } from "./isCronMonthValueNumber.js";
import { isCronMonthValueString } from "./isCronMonthValueString.js";

/**
 * Check if given is `CronMonthValue`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronMonthValue(10); // true
 * isCronMonthValue("OCT"); // true
 * isCronMonthValue("oct"); // true
 * isCronMonthValue("OCTOBER"); // false
 * isCronMonthValue(50); // false
 * isCronMonthValue("INVALID"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronMonthValue`, `false` otherwise.
 */
export const isCronMonthValue = (value: unknown): value is CronMonthValue =>
	(isNumber(value) && isCronMonthValueNumber(value)) ||
	(isString(value) && isCronMonthValueString(value));
