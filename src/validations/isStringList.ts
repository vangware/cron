import { CRON_LIST_SEPARATOR } from "../constants";

/**
 * Checks if given value has a the "separator token", which means is a CronList.
 * @param value Value to check.
 */
export const isStringList = (value: string) =>
	value.includes(CRON_LIST_SEPARATOR);
