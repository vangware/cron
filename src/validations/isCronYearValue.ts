import { between, isNumber } from "@vangware/predicates";
import type { CronYearValue } from "../types/CronYearValue.js";

/**
 * Check if given is `CronYearValue`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isCronYearValue = (value: unknown): value is CronYearValue =>
	isNumber(value) && between(1970)(2099)(value);
