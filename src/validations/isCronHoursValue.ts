import { between, isNumber } from "@vangware/predicates";
import type { CronHoursValue } from "../types/CronHoursValue.js";

/**
 * Check if given is `CronHoursValue`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isCronHoursValue = (value: unknown): value is CronHoursValue =>
	isNumber(value) && between(0)(23)(value);
