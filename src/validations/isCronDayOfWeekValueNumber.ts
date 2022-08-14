import { between, isNumber } from "@vangware/predicates";
import type { CronDayOfWeekValueNumber } from "../types/CronDayOfWeekValueNumber.js";

/**
 * Check if given is `CronDayOfWeekValueNumber`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isCronDayOfWeekValueNumber = (
	value: unknown,
): value is CronDayOfWeekValueNumber => isNumber(value) && between(0)(7)(value);
