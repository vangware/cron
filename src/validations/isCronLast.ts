import { isString } from "@vangware/utils";
import { CRON_LAST } from "../constants.js";
import type { CronLast } from "../types/CronLast.js";

/**
 * Check if given is `CronLast`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronLast = (value: unknown): value is CronLast =>
	isString(value) && value === CRON_LAST;
