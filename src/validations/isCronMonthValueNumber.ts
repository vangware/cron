import { between, isNumber } from "@vangware/predicates";
import type { CronMonthValueNumber } from "../types/CronMonthValueNumber.js";

/**
 * Check if given is `CronMonthValueNumber`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isCronMonthValueNumber = (
	value: unknown,
): value is CronMonthValueNumber => isNumber(value) && between(1)(12)(value);
