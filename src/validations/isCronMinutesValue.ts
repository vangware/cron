import { between, isNumber } from "@vangware/predicates";
import type { CronMinutesValue } from "../types/CronMinutesValue.js";

/**
 * Check if given is `CronMinutesValue`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isCronMinutesValue = (value: unknown): value is CronMinutesValue =>
	isNumber(value) && between(0)(59)(value);
