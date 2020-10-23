import type { CronQuartzExtension } from "./CronQuartzExtension";
import type { CronUnix } from "./CronUnix";

/**
 * Cron object (Quartz).
 */
export type CronQuartz = CronUnix & CronQuartzExtension;
