import type { CronPart } from "./CronPart.js";
import type { CronSecondsValue } from "./CronSecondsValue.js";

/**
 * Cron seconds.
 */
export type CronSeconds = CronPart<CronSecondsValue>;
