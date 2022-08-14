import { isString } from "@vangware/predicates";
import { CRON_EVERY } from "../constants.js";
import type { CronEvery } from "../types/CronEvery.js";

/**
 * Check if given is `CronEvery`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronEvery("*"); // true
 * isCronEvery("INVALID"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronEvery`, `false` otherwise.
 */
export const isCronEvery = (value: unknown): value is CronEvery =>
	isString(value) && value === CRON_EVERY;
