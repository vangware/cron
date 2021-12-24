import { isString } from "@vangware/utils";
import { CRON_EVERY } from "../constants.js";
import type { CronEvery } from "../types/CronEvery.js";

/**
 * Check if given is `CronEvery`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronEvery = (value: unknown): value is CronEvery =>
	isString(value) && value === CRON_EVERY;
