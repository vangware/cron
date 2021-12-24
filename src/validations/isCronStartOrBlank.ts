import { isString } from "@vangware/utils";
import { CRON_START_OR_BLANK } from "../constants.js";
import type { CronStartOrBlank } from "../types/CronStartOrBlank.js";

/**
 * Check if given is `CronStartOrBlank`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronStartOrBlank = (value: unknown): value is CronStartOrBlank =>
	isString(value) && value === CRON_START_OR_BLANK;
