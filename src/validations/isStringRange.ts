import { CRON_RANGE_SEPARATOR } from "../constants";
import { stringIncludesOnlyOnce } from "./stringIncludesOnlyOnce";

/**
 * Check if given is a string representing a `CronRange`.
 * @param value Value to check.
 */
export const isStringRange = stringIncludesOnlyOnce(CRON_RANGE_SEPARATOR);
