import { isString } from "@vangware/utils";
import { CRON_LAST } from "../constants";
import { CronLast } from "../types/CronLast";

/**
 * Check if given value is "last token".
 * @param value Value to check.
 */
export const isCronLast = (value: unknown): value is CronLast =>
	isString(value) && value === CRON_LAST;
