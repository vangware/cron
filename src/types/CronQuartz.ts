import { CronQuartzExtension } from "./CronQuartzExtension";
import { CronUnix } from "./CronUnix";

/**
 * Cron object (Quartz).
 */
export type CronQuartz = CronUnix & CronQuartzExtension;
