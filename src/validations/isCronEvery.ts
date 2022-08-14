import { isString } from "@vangware/predicates";
import { CRON_EVERY } from "../constants.js";
import type { CronEvery } from "../types/CronEvery.js";

/**
 * Check if given is `CronEvery`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isCronEvery = (value: unknown): value is CronEvery =>
	isString(value) && value === CRON_EVERY;
