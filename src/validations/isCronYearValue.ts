import { isNumber, numberBetween } from "@vangware/utils";
import type { CronYearValue } from "../types/CronYearValue.js";

/**
 * Check if given is `CronYearValue`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronYearValue = (value: unknown): value is CronYearValue =>
	isNumber(value) && numberBetween(1970)(2099)(value);
