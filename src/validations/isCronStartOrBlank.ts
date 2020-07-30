import { isString } from "@vangware/utils";
import { CRON_START_OR_BLANK } from "../constants";
import { CronStartOrBlank } from "../types/CronStartOrBlank";

/**
 * Check if given value is a "start or blank token".
 * @param value Value to check.
 */
export const isCronStartOrBlank = (value: unknown): value is CronStartOrBlank =>
	isString(value) && value === CRON_START_OR_BLANK;
