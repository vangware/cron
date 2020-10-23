import type { CronPart } from "./CronPart";
import type { CronSecondsValue } from "./CronSecondsValue";

/**
 * Cron seconds.
 */
export type CronSeconds = CronPart<CronSecondsValue>;
