import { isNumber, numberBetween } from "@vangware/utils";
import type { CronMinutesValue } from "../types/CronMinutesValue.js";

/**
 * Check if given is `CronMinutesValue`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronMinutesValue = (value: unknown): value is CronMinutesValue =>
	isNumber(value) && numberBetween(0)(59)(value);
