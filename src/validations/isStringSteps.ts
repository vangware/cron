import { CRON_STEPS_SEPARATOR } from "../constants.js";
import { stringIncludesOnlyOnce } from "./stringIncludesOnlyOnce.js";

/**
 * Check if given is a string representing a `CronSteps`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isStringSteps = stringIncludesOnlyOnce(CRON_STEPS_SEPARATOR);
