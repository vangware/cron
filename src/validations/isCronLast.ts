import { isString } from "@vangware/utils";
import { CRON_LAST } from "../constants";
import type { CronLast } from "../types/CronLast";

/**
 * Check if given is `CronLast`.
 * @param value Value to check.
 */
export const isCronLast = (value: unknown): value is CronLast =>
	isString(value) && value === CRON_LAST;
