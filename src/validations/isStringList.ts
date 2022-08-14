import { isString } from "@vangware/predicates";
import { CRON_LIST_SEPARATOR } from "../constants.js";

/**
 * Check if given is a string representing a `CronList`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isStringList("value,value,value"); // true
 * isStringList("value"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is a string representing a `CronList`, `false` otherwise.
 */
export const isStringList = (value: unknown): value is string =>
	isString(value) && value.includes(CRON_LIST_SEPARATOR);
