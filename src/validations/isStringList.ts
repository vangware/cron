import { isString } from "@vangware/utils";
import { CRON_LIST_SEPARATOR } from "../constants";

/**
 * Checks if given value has a the "separator token", which means is a CronList.
 * @param value Value to check.
 */
export const isStringList = (value: unknown): value is string =>
	isString(value) && value.includes(CRON_LIST_SEPARATOR);
