import { isString } from "@vangware/utils";
import { CRON_EVERY } from "../constants";
import { CronEvery } from "../types/CronEvery";

/**
 * Check if given value is the "every token".
 * @param value Value to check.
 */
export const isCronEvery = (value: unknown): value is CronEvery =>
	isString(value) && value === CRON_EVERY;
