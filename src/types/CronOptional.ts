import { CronQuartzExtension } from "./CronQuartzExtension";
import { CronUnix } from "./CronUnix";

/**
 * Cron expression parts with optional values.
 */
export type CronOptional = CronUnix & Partial<CronQuartzExtension>;
