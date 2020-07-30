import { CRON_STEPS_SEPARATOR } from "../constants";
import { stringIncludesOnlyOnce } from "./stringIncludesOnlyOnce";

/**
 * Check if given is a string representing a `CronSteps`.
 * @param value Value to check.
 */
export const isStringSteps = stringIncludesOnlyOnce(CRON_STEPS_SEPARATOR);
