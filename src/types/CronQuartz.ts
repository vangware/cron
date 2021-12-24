import type { CronQuartzExtension } from "./CronQuartzExtension.js";
import type { CronUnix } from "./CronUnix.js";

/**
 * Cron object (Quartz).
 */
export type CronQuartz = CronQuartzExtension & CronUnix;
