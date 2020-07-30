import { CRON_RANGE_SEPARATOR } from "../constants";
import { stringIncludesOnlyOnce } from "./stringIncludesOnlyOnce";

/**
 * Checks if given value has only one "range token", which means is a CronRange.
 */
export const isStringRange = stringIncludesOnlyOnce(CRON_RANGE_SEPARATOR);
