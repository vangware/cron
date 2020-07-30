import { CRON_STEPS_SEPARATOR } from "../constants";
import { stringIncludesOnlyOnce } from "./stringIncludesOnlyOnce";

/**
 * Checks if given value has a only one "step separator token",
 * which means is a CronSteps.ç
 */
export const isStringSteps = stringIncludesOnlyOnce(CRON_STEPS_SEPARATOR);
