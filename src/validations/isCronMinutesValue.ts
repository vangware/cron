import { isNumber, numberBetween } from "@vangware/utils";
import type { CronMinutesValue } from "../types/CronMinutesValue";

/**
 * Check if given is `CronMinutesValue`.
 * @param value Value to check.
 */
export const isCronMinutesValue = (value: unknown): value is CronMinutesValue =>
	isNumber(value) && numberBetween(0)(59)(value);
