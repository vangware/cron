import { CRON_STEPS_SEPARATOR } from "../constants.js";
import { stringIncludesOnlyOnce } from "./stringIncludesOnlyOnce.js";

/**
 * Check if given is a string representing a `CronSteps`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isStringSteps("value/value"); // true
 * isStringSteps("value/value/value"); // false
 * isStringSteps("value"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is a string representing a `CronSteps`, `false` otherwise.
 */
export const isStringSteps = stringIncludesOnlyOnce(CRON_STEPS_SEPARATOR);
