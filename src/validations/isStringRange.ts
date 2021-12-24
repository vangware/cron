import { CRON_RANGE_SEPARATOR } from "../constants.js";
import { stringIncludesOnlyOnce } from "./stringIncludesOnlyOnce.js";

/**
 * Check if given is a string representing a `CronRange`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isStringRange = stringIncludesOnlyOnce(CRON_RANGE_SEPARATOR);
