import { isString } from "@vangware/predicates";
import { CRON_LAST } from "../constants.js";
import type { CronLast } from "../types/CronLast.js";

/**
 * Check if given is `CronLast`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronLast("L"); // true
 * isCronLast("INVALID"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronLast`, `false` otherwise.
 */
export const isCronLast = (value: unknown): value is CronLast =>
	isString(value) && value === CRON_LAST;
