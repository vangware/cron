import { between, isNumber } from "@vangware/predicates";
import type { CronDayOfMonthValue } from "../types/CronDayOfMonthValue.js";

/**
 * Check if given is `CronDayOfMonthValue`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isCronDayOfMonthValue = (
	value: unknown,
): value is CronDayOfMonthValue => isNumber(value) && between(1)(31)(value);
