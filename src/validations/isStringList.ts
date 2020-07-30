import { isString } from "@vangware/utils";
import { CRON_LIST_SEPARATOR } from "../constants";

/**
 * Check if given is a string representing a `CronList`.
 * @param value Value to check.
 */
export const isStringList = (value: unknown): value is string =>
	isString(value) && value.includes(CRON_LIST_SEPARATOR);
