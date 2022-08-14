import { between, isNumber } from "@vangware/predicates";
import type { CronWeekValue } from "../types/CronWeekValue.js";

/**
 * Check if given is `CronWeekValue`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isCronWeekValue = (value: unknown): value is CronWeekValue =>
	isNumber(value) && between(1)(5)(value);
