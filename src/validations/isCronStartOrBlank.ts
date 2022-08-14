import { isString } from "@vangware/predicates";
import { CRON_START_OR_BLANK } from "../constants.js";
import type { CronStartOrBlank } from "../types/CronStartOrBlank.js";

/**
 * Check if given is `CronStartOrBlank`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronStartOrBlank("?"); // true
 * isCronStartOrBlank("INVALID"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronStartOrBlank`, `false` otherwise.
 */
export const isCronStartOrBlank = (value: unknown): value is CronStartOrBlank =>
	isString(value) && value === CRON_START_OR_BLANK;
