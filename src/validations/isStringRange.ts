import { CRON_RANGE_SEPARATOR } from "../constants.js";
import { stringIncludesOnlyOnce } from "./stringIncludesOnlyOnce.js";

/**
 * Check if given is a string representing a `CronRange`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isStringRange("10-20"); // true
 * isStringRange("13-10-1989"); // false
 * isStringRange("value"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is a string representing a `CronRange`, `false` otherwise.
 */
export const isStringRange = stringIncludesOnlyOnce(CRON_RANGE_SEPARATOR);
