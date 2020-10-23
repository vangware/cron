import { isString } from "@vangware/utils";
import { CRON_EVERY } from "../constants";
import type { CronEvery } from "../types/CronEvery";

/**
 * Check if given is `CronEvery`.
 * @param value Value to check.
 */
export const isCronEvery = (value: unknown): value is CronEvery =>
	isString(value) && value === CRON_EVERY;
