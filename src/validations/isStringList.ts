import { isString } from "@vangware/predicates";
import { CRON_LIST_SEPARATOR } from "../constants.js";

/**
 * Check if given is a string representing a `CronList`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isStringList = (value: unknown): value is string =>
	isString(value) && value.includes(CRON_LIST_SEPARATOR);
